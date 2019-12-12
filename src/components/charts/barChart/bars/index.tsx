import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { Bar, IBar } from "./bar";

interface IBars {
  readonly maxYValue: number;
  readonly bars: IBar[];
}

export const Bars: React.FC<IBars> = ({ maxYValue, bars }) => {
  return (
    <StyledBars maxYValue={maxYValue}>
      {bars.map(bar => (
        <Bar key={bar.id} {...bar} />
      ))}
    </StyledBars>
  );
};

const StyledBars = styled.div<Pick<IBars, "maxYValue">>`
  height: ${({ maxYValue }) => maxYValue * 20}px;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 200;
  position: relative;
  top: 0;
  right: 0;
  float: right;
`;
