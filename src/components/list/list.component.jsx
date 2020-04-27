import React from "react";

//styles
import { Container, ScrollContainer } from "./list.styles";

const List = ({ chunkedArray }) => {
  return (
    <ScrollContainer>
      {chunkedArray.map((item) => (
        <Container>
          {item.map((food) =>
            Object.keys(food).map((key) => (
              <div>
                <span>{key}.</span>
                <span>{food[key]["name"]}</span>
                <span>{food[key]["additionalInfo"]}</span>
                <span>
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

export default List;
