import React, { useRef } from "react";
import styled from "styled-components";
import _ from "lodash";
import { VerticalResizeButton } from "./VerticalResizeButton";

export interface IBar {
  readonly id: string;
  readonly yCoordinate: number;
  readonly color: string;
  readonly maxYValue: number;
  readonly yAxisUnit: number;
}

export const Bar: React.FC<IBar> = ({
  id,
  yCoordinate,
  color,
  maxYValue,
  yAxisUnit
}) => {
  const barRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  return (
    <StyledBar ref={barRef} yCoordinate={yCoordinate} color={color}>
      <VerticalResizeButton
        barId={id}
        barRef={barRef}
        maxYValue={maxYValue}
        yAxisUnit={yAxisUnit}
      ></VerticalResizeButton>
    </StyledBar>
  );
};

const StyledBar = styled.div<Pick<IBar, "color" | "yCoordinate">>`
  background-color: ${({ color }) => color};
  width: 100px;
  height: ${({ yCoordinate }) => yCoordinate * 20}px;
  border: 1px solid #000;
`;
