import React, { useEffect, useState } from "react";

const InputCategory = ({
  meal,
  setSearchQuery,
  inputValue,
  setInputValue,
  selectedCategory,
  setSelectedCategory,
}) => {
  useEffect(() => {
    if (meal.length > 0) {
      setInputValue(meal.length);
    }
  }, [meal]);

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
  return (
    <div className="inputs-part">
      <div className="inputs">
        <input
          type="search"
          placeholder="Search for a meal"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="number-input">
          <span>{inputValue / inputValue} </span>
          <input
            type="range"
            min="1"
            value={inputValue}
            max={meal.length > 0 ? meal.length : 1}
            onChange={(e) => setInputValue(Number(e.target.value))}
          />
          <span>{inputValue} Meals</span>
        </div>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="" disabled={true}>
            All categories
          </option>
          {mealCategories?.map((category) => (
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputCategory;
