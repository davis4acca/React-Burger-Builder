import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styled from "styled-components";

const burger = ({ ingredients }) => {
  let transformedIngredients = [];
  let ingredientsKeys = [];
  if (ingredients) {
    ingredientsKeys = Object.keys(ingredients);
  }

  ingredientsKeys.forEach(key => {
    for (let i = 0; i < ingredients[key]; i++) {
      transformedIngredients.push(key);
    }
  });

  // [meat, meat,cheese...]
  transformedIngredients = transformedIngredients.map((ig, i) => (
    <BurgerIngredient type={ig} key={ig + i} />
  ));

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding your ingredients! :) </p>;
  }

  return (
    <BurgerWrapper>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </BurgerWrapper>
  );
};

const BurgerWrapper = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`;

export default burger;
