import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button.styled";
import { CheckourSummaryStyled } from "./CheckoutSummary.styled";

const checkoutSummary = ({
  ingredients,
  checkoutCancelled,
  checkoutContinued
}) => {
  return (
    <CheckourSummaryStyled>
      <h1>We hope it tastes good!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button danger onClick={checkoutCancelled}>
        CANCEL
      </Button>
      <Button success onClick={checkoutContinued}>
        CONTINUE
      </Button>
    </CheckourSummaryStyled>
  );
};

export default checkoutSummary;
