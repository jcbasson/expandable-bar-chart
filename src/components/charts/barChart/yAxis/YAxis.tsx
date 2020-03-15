import React from "react";
import range from "lodash/range";
import YMeasurement from "./YMeasurement";
import { IYAxis } from "./types";
import { YAxisContainer } from "./styled";

const YAxis: React.FC<IYAxis> = ({
  maxYValue,
  yAxisHeight,
  yAxisDisplayValueEveryBarCount,
  yAxisUnitPixels
}) => {
  return (
    <YAxisContainer yAxisHeight={yAxisHeight}>
      {range(1, maxYValue + 1)
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

export default YAxis;
