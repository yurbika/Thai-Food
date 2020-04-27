import React from "react";

import ScrollContainer from "../scroll-container/scroll-container.component";

//styles
import { Container } from "./list.styles";

const List = ({ chunkedArray }) => {
  return (
    <>
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
    </>
  );
};

export default List;
