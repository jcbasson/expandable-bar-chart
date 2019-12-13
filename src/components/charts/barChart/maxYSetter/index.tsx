import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { IMaxYSetter } from "./types";
import { setMaxY } from "./actions";

export const MaxYSetter: React.FC<IMaxYSetter> = ({ barChartId, maxY }) => {
  const dispatch = useDispatch();

  const setYAxisMaximum = (event: SyntheticEvent) =>
    dispatch(setMaxY({ barChartId, maxY: _.get(event, "target.value", {}) }));

  return (
    <MaxYSetterContainer>
      <MaxYSetterInput value={maxY} type="text" onChange={setYAxisMaximum} />
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
