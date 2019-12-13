import React, { useRef } from "react";
import styled from "styled-components";
import _ from "lodash";
import { VerticalResizeButton } from "./VerticalResizeButton";
import { IBar } from "./types";
import { calculateYAxisUnitPixels } from "../../utils";

export const Bar: React.FC<IBar> = ({
  id,
  yCoordinate,
  color,
  maxYValue,
  chartBarId,
  yAxisHeight
}) => {
  const yAxisUnitPixels = calculateYAxisUnitPixels(yAxisHeight, maxYValue);
  const barRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  return (
    <StyledBar
      ref={barRef}
      yCoordinate={yCoordinate}
      color={color}
      yAxisUnitPixels={yAxisUnitPixels}
    >
      <VerticalResizeButton
        chartBarId={chartBarId}
        barId={id}
        barRef={barRef}
        yAxisUnitPixels={yAxisUnitPixels}
      ></VerticalResizeButton>
    </StyledBar>
  );
};

const StyledBar = styled.div<
  Pick<IBar, "color" | "yCoordinate"> & { yAxisUnitPixels: number }
>`
  background-color: ${({ color }) => color};
  width: 100px;
  height: ${({ yCoordinate, yAxisUnitPixels }) =>
    yCoordinate * yAxisUnitPixels}px;
  border: 1px solid #000;
`;
