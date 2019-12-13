import * as React from "react";
import styled from "styled-components";
import _ from "lodash";
import { YMeasurement } from "./YMeasurement";
import { IYAxis } from "./types";
import { calculateYAxisUnitPixels } from "../utils";

export const YAxis: React.FC<IYAxis> = ({
  maxYValue,
  yAxisHeight,
  yAxisDisplayValueEveryBarCount
}) => {
  const yAxisUnitPixels = calculateYAxisUnitPixels(yAxisHeight, maxYValue);
  return (
    <YAxisContainer yAxisHeight={yAxisHeight}>
      {_.range(1, maxYValue + 1)
        .reverse()
        .map((yValue: number) => {
          const displayValue = yValue % yAxisDisplayValueEveryBarCount === 0;
          return (
            <YMeasurement
              key={yValue}
              value={yValue}
              displayValue={displayValue}
              yAxisUnitPixels={yAxisUnitPixels}
            />
          );
        })}
    </YAxisContainer>
  );
};

const YAxisContainer = styled.div<Pick<IYAxis, "yAxisHeight">>`
  float: left;
  height: ${({ yAxisHeight }) => yAxisHeight}px;
  width: 10%;
  border-right: 1px solid #8f9092;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
