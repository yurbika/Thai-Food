import React from "react";

const List = ({ chunkedArray }) => {
  return (
    <React.Fragment>
      {chunkedArray.map((item) => (
        <div>
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
        </div>
      ))}
    </React.Fragment>
  );
};

export default List;
