import React from "react";
import Card from "./Card";

const CardDisplay = ({ meal, selectedCategory }) => {
  const mealCategories = [
    { idCategory: 1, strCategory: "Beef" },
    { idCategory: 2, strCategory: "Chicken" },
    { idCategory: 3, strCategory: "Dessert" },
    { idCategory: 4, strCategory: "Lamb" },
    { idCategory: 5, strCategory: "Miscellaneous" },
    { idCategory: 6, strCategory: "Pasta" },
    { idCategory: 7, strCategory: "Pork" },
    { idCategory: 8, strCategory: "Seafood" },
    { idCategory: 9, strCategory: "Side" },
    { idCategory: 10, strCategory: "Starter" },
    { idCategory: 11, strCategory: "Vegan" },
    { idCategory: 12, strCategory: "Vegetarian" },
    { idCategory: 13, strCategory: "Breakfast" },
    { idCategory: 14, strCategory: "Goat" },
  ];
  console.log(selectedCategory);

  return (
    <div className="card-display">
      {meal.length > 1 ? (
        meal
          .filter((meal) => {
            if (selectedCategory === mealCategories[meal.idCategory]) {
              return meal;
            } else {
              return null;
            }
          })

          .map((meal, index) => <Card key={index} meal={meal} />)
      ) : (
        <h2>No meal found</h2>
      )}
    </div>
  );
};

export default CardDisplay;
