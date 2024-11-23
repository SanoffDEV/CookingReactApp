import React, { useState } from "react";

const Card = ({ meal }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`card ${isActive ? "active" : ""}`}>
      {/* Bouton pour fermer les détails */}
      <span onClick={() => setIsActive(false)}>{isActive ? "X" : ""}</span>

      {/* Nom et origine du repas */}
      <h2>{meal.strMeal}</h2>
      <h3>{`Origin : ${meal.strArea}`}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />

      {/* Bouton pour afficher plus d'informations */}
      <h4 onClick={handleClick}>{isActive ? "" : "More Info"}</h4>

      {/* Section des ingrédients */}
      {isActive && (
        <div className="aliments">
          <h3>Ingredients</h3>
          {Array.from({ length: 20 }, (_, i) => {
            const ingredient = meal[`strIngredient${i + 1}`];
            const measure = meal[`strMeasure${i + 1}`];

            return ingredient ? (
              <h5 key={i}>{`${i + 1} : ${ingredient} : ${measure || ""}`}</h5>
            ) : null;
          })}
        </div>
      )}

      {/* Section de la recette */}
      {isActive && (
        <>
          <h3>Recipe</h3>
          <div className="recipe">{meal.strInstructions}</div>

          {/* Lien vers la vidéo */}
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
            Learn in Video!
          </a>
        </>
      )}
    </div>
  );
};

export default Card;
