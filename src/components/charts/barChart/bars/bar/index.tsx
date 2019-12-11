import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { Resizer } from "./resizer";

export interface IBar {
  readonly yCoordinate: number;
  readonly color: string;
}

export const Bar: React.FC<IBar> = ({ yCoordinate, color }) => {
  return (
    <StyledBar yCoordinate={yCoordinate} color={color}>
      <Resizer></Resizer>
    </StyledBar>
  );
};

const StyledBar = styled.div<IBar>`
  background-color: ${({ color }) => color};
  width: 100px;
  height: ${({ yCoordinate }) => yCoordinate * 20}px;
  border: 1px solid #000;
`;
