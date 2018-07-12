import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BreadBottom,
  BreadTop,
  Seeds1,
  Seeds2,
  Meat,
  Salad,
  Cheese,
  Bacon
} from "./BurgerIngridient.styled";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <BreadBottom />;
        break;
      case "bread-top":
        ingredient = (
          <BreadTop>
            <Seeds1 />
            <Seeds2 />
          </BreadTop>
        );
        break;
      case "meat":
        ingredient = <Meat />;
        break;
      case "salad":
        ingredient = <Salad />;
        break;
      case "cheese":
        ingredient = <Cheese />;
        break;
      case "bacon":
        ingredient = <Bacon />;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.prototypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
