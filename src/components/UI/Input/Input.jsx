import React from "react";
import { InputWrapper, Label, Input, Select, TextArea } from "./Input.styled";

const input = props => {
  var inputElement = null;

  let invalid = false;

  if (props.invalid && props.shouldValidate && props.touched) {
    invalid = props.invalid;
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <Input
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
          invalid={invalid}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <TextArea
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
          invalid={invalid}
        />
      );
      break;
    case "select":
      inputElement = (
        <Select value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </Select>
      );
      break;
    default:
      inputElement = <Input {...props.elementConfig} value={props.value} />;
  }
  return (
    <InputWrapper>
      <Label>{props.label}</Label>
      {inputElement}
    </InputWrapper>
  );
};

export default input;
