import React from "react";
import { BuildControlsWrapper, OrderButton } from "./BuildControls.styled";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Salad", type: "salad" }
];

const buildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  purchaseable,
  price,
  ordered,
  isAuth
}) => (
  <BuildControlsWrapper>
    |<p>
      Current Price : <strong>{price.toFixed(2)}$ </strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        added={() => ingredientAdded(ctrl.type)}
        removed={() => ingredientRemoved(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
        disabled={disabled[ctrl.type]}
      />
    ))}
    <OrderButton onClick={ordered} disabled={!purchaseable}>
      {isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
    </OrderButton>
  </BuildControlsWrapper>
);

export default buildControls;
