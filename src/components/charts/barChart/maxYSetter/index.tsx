import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { IMaxYSetter } from "./types";

export const MaxYSetter: React.FC<IMaxYSetter> = ({ setMaxYHandler, maxY }) => {
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
