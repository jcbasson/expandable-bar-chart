import React from "react";
import { IMaxLevelSetter } from "./types";
import {
  MaxYSetterContainer,
  MaxYSetterInput,
  MaxYSetterLabel
} from "./styled";

const MaxLevelSetter: React.FC<IMaxLevelSetter> = ({
  setMaxYHandler,
  maxY
}) => {
  return (
    <MaxYSetterContainer>
      <MaxYSetterInput
        value={maxY}
        type="text"
        onChange={setMaxYHandler}
      ></MaxYSetterInput>
      <MaxYSetterLabel>Y-Axis Maximum:</MaxYSetterLabel>
    </MaxYSetterContainer>
  );
};

export default MaxLevelSetter;
