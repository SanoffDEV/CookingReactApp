import React from "react";
import Card from "./Card";

const CardDisplay = ({ meal, selectedCategory }) => {
  return (
    <div className="card-display">
      {meal.length > 0 ? (
        meal
          .filter(
            (meal) =>
              selectedCategory === "" || meal.strCategory === selectedCategory
          )
          .map((meal, index) => <Card key={index} meal={meal} />)
      ) : (
        <div className="no-meal">
          <h2>No meal found</h2>
        </div>
      )}
    </div>
  );
};

export default CardDisplay;
