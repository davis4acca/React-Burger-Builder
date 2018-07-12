import React, { Component, Fragment } from "react";
import Button from "../../UI/Button/Button.styled";
class OrderSummary extends Component {
  render() {
    var {
      ingredients,
      purchaseCancelled,
      purchaseContinued,
      price
    } = this.props;

    const ingredientSummary = Object.keys(ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}> {igKey} </span> :
          {ingredients[igKey]}
        </li>
      );
    });

    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>Delicious Burger with the following ingredients: </p>

        <ul>{ingredientSummary}</ul>
        <p>
          <strong> Total Price: {price.toFixed(2)}$ </strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button danger onClick={purchaseCancelled}>
          CANCEL
        </Button>
        <Button success onClick={purchaseContinued}>
          CONTINUE
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
