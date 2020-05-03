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

class List extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (
      this.props.subcounter !== nextProps.subcounter ||
      this.props.chunkedArray !== nextProps.chunkedArray
    )
      return true;
    return false;
  }

  render() {
    const { chunkedArray, subcounter } = this.props;
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
                  <span key={ID_GENERATOR("food-number-")} tabIndex={0}>
                    {key}.
                  </span>
                  <FoodNameAndTranslationContainer>
                    <FoodName key={ID_GENERATOR("food-name-")} tabIndex={0}>
                      {food[key]["name"]}
                    </FoodName>
                    {!!food[key]["additionalInfo"] ? (
                      <FoodNameTranslation
                        key={ID_GENERATOR("food-additional-info-")}
                        tabIndex={0}
                      >
                        {food[key]["additionalInfo"]}
                      </FoodNameTranslation>
                    ) : null}
                  </FoodNameAndTranslationContainer>
                  <span key={ID_GENERATOR("food-price-")} tabIndex={0}>
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
  }
}

// const List = () => {

// };

const mapStateToProps = createStructuredSelector({
  subcounter: selectMenuSubCounter,
});

export default connect(mapStateToProps)(List);
