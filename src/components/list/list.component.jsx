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
  FoodNameAndTranslationContainer,
  Row,
  FoodNameTranslation,
  FoodName,
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
                <span key={ID_GENERATOR("food-number-")}>{key}.</span>
                <FoodNameAndTranslationContainer>
                  <FoodName key={ID_GENERATOR("food-name-")}>
                    {food[key]["name"]}
                  </FoodName>
                  {!!food[key]["additionalInfo"] ? (
                    <FoodNameTranslation
                      key={ID_GENERATOR("food-additional-info-")}
                    >
                      {food[key]["additionalInfo"]}
                    </FoodNameTranslation>
                  ) : null}
                </FoodNameAndTranslationContainer>
                <span key={ID_GENERATOR("food-price-")}>
                  {Number(food[key]["price"]).toLocaleString("es-Es", {
                    minimumFractionDigits: 2,
                  }) + " "}
                  €
                </span>
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
