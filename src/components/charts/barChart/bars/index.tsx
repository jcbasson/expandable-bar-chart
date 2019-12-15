import React, { useRef } from "react";
import styled from "styled-components";
import _ from "lodash";
import { Bar } from "./bar";
import { IBars } from "./types";

export const Bars: React.FC<IBars> = ({ bars, yAxisHeight }) => {
  return (
    <StyledBars yAxisHeight={yAxisHeight}>
      {bars.map(bar => (
        <Bar key={bar.barName} {...bar} />
      ))}
      <BarTrackerLine className="bar-tracker-line" />
    </StyledBars>
  );
};

const StyledBars = styled.div<Pick<IBars, "yAxisHeight">>`
  height: ${({ yAxisHeight }) => yAxisHeight}px;
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

const BarTrackerLine = styled.span`
  border: 1px dashed #000;
  align-self: start;
  width: 450px;
  position: absolute;
  left: -26px;
  display: none;
`;
