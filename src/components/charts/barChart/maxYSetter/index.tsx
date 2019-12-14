import React, { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { IMaxYSetter } from "./types";
import { setMaxY } from "./actions";
import {
  convertStringToInt,
  isNumberInRange
} from "../../../../utils/numberUtils";

//TODO: Figure out more restrictions around what max Y can be
export const MaxYSetter: React.FC<IMaxYSetter> = ({ barChartId, maxY }) => {
  const dispatch = useDispatch();
  const [inputValue, setState] = useState(maxY.toString());

  const setYAxisMaximum = (event: SyntheticEvent) => {
    const maxY = convertStringToInt(_.get(event, "target.value", {}));
    setState(isNaN(maxY) ? " " : maxY.toString());
    //TODO: Make this range  configurable through props and state
    if (isNumberInRange(5, 100, maxY)) {
      dispatch(setMaxY({ barChartId, maxY }));
    }
  };

  return (
    <MaxYSetterContainer>
      <MaxYSetterInput
        value={inputValue}
        type="text"
        onChange={setYAxisMaximum}
      ></MaxYSetterInput>
      <MaxYSetterLabel>Y-Axis Maximum:</MaxYSetterLabel>
    </MaxYSetterContainer>
  );
};

const MaxYSetterContainer = styled.div`
  width: 85%;
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-end;
`;

const MaxYSetterLabel = styled.label`
  color: black;
  font-weight: bold;
  padding-right: 10px;
`;

const MaxYSetterInput = styled.input`
  width: 100px;
`;
