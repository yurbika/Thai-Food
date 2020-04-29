import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux
import { selectMenuSubCounter } from "../../redux/menu/menu.selectors";

//utils
import ID_GENERATOR from "../../utils/uniqueKey";

//styles
import {
  Container,
  ScrollContainer,
  FoodNameAndTranslation,
  Row,
  Span,
} from "./list.styles";

const List = ({ chunkedArray, subcounter }) => {
  return (
    <ScrollContainer marginValue={100 * subcounter} tabIndex={-1}>
      {chunkedArray.map((item, index) => (
        <Container
          active={subcounter === index}
          key={ID_GENERATOR("list-container-")}
        >
          {item.map((food) =>
            Object.keys(food).map((key, index) => (
              <Row key={ID_GENERATOR("food-row-")}>
                <Span key={ID_GENERATOR("food-number-")}>{key}.</Span>
                <FoodNameAndTranslation>
                  <span key={ID_GENERATOR("food-name-")}>
                    {food[key]["name"]}
                  </span>
                  {!!food[key]["additionalInfo"] ? (
                    <span key={ID_GENERATOR("food-additional-info-")}>
                      {food[key]["additionalInfo"]}
                    </span>
                  ) : null}
                </FoodNameAndTranslation>
                <Span key={ID_GENERATOR("food-price-")}>
                  {Number(food[key]["price"]).toLocaleString("es-Es", {
                    minimumFractionDigits: 2,
                  }) + " "}
                  €
                </Span>
              </Row>
            ))
          )}
        </Container>
      ))}
    </ScrollContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  subcounter: selectMenuSubCounter,
});

export default connect(mapStateToProps)(List);
