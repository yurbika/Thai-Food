import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//redux
import { selectMenuSubCounter } from "../../redux/menu/menu.selectors";

//styles
import { Container, ScrollContainer } from "./list.styles";

const List = ({ chunkedArray, subcounter }) => {
  return (
    <ScrollContainer marginValue={100 * subcounter}>
      {chunkedArray.map((item, index) => (
        <Container active={subcounter === index}>
          {item.map((food) =>
            Object.keys(food).map((key) => (
              <div>
                <span tabIndex={0}>{key}.</span>
                <span tabIndex={0}>{food[key]["name"]}</span>
                <span tabIndex={0}>{food[key]["additionalInfo"]}</span>
                <span tabIndex={0}>
                  {Number(food[key]["price"]).toLocaleString("es-Es", {
                    minimumFractionDigits: 2,
                  }) + " "}
                  €
                </span>
              </div>
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
