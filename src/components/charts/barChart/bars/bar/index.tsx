import React, { useRef } from "react";
import styled from "styled-components";
import _ from "lodash";
import { VerticalResizeButton } from "./VerticalResizeButton";
import { IBar } from "./types";
import { restrictBarYValue } from "./utils";
import { BarChartSettingsContext } from "../../context";

export const Bar: React.FC<IBar> = ({
  barName,
  yValue,
  color,
  onYValueChange
}) => {
  const barRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <BarChartSettingsContext.Consumer>
      {({ yAxisUnitPixels, maxYValue }) => {
        return (
          <StyledBar
            ref={barRef}
            yValue={restrictBarYValue(maxYValue, yValue)}
            color={color}
            yAxisUnitPixels={yAxisUnitPixels}
          >
            <VerticalResizeButton
              barRef={barRef}
              maxYValue={maxYValue}
              yAxisUnitPixels={yAxisUnitPixels}
              onYValueChange={onYValueChange}
            ></VerticalResizeButton>
            <BarLabel>{barName}</BarLabel>
          </StyledBar>
        );
      }}
    </BarChartSettingsContext.Consumer>
  );
};

const StyledBar = styled.div<
  Pick<IBar, "color" | "yValue"> & { yAxisUnitPixels: number }
>`
  background-color: ${({ color }) => color};
  width: 100px;
  height: ${({ yValue, yAxisUnitPixels }) => yValue * yAxisUnitPixels}px;
  border: 1px solid #000;
`;

const BarLabel = styled.label`
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 20px;
`;
