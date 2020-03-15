import React, { useRef } from "react";
import YAxis from "./yAxis";
import XAxis from "./xAxis";
import Bars from "./bars";
import { IBarChart } from "./types";
import {
  restrictYAxisMaximum,
  calculateYAxisUnitPixels,
  getMinValueAllowedForYAxisMax
} from "./utils";
import { BarChartContainer, StyledBarChart } from "./styled";

const BarChart: React.FC<IBarChart> = ({
  yAxisHeight,
  xAxisWidth,
  maxValueAllowedForYAxisMax,
  defaultYAxisMax,
  data,
  isReadOnly
}) => {
  const minValueAllowedForYAxisMax = getMinValueAllowedForYAxisMax(data);
  const maxYValue = restrictYAxisMaximum(
    defaultYAxisMax.toString(),
    minValueAllowedForYAxisMax,
    maxValueAllowedForYAxisMax
  );
  const yAxisUnitPixels = calculateYAxisUnitPixels(yAxisHeight, maxYValue);

  return (
    <BarChartContainer>
      <StyledBarChart yAxisHeight={yAxisHeight} xAxisWidth={xAxisWidth}>
        <YAxis
          maxYValue={maxYValue}
          yAxisHeight={yAxisHeight}
          yAxisDisplayValueEveryBarCount={5}
          yAxisUnitPixels={yAxisUnitPixels}
        ></YAxis>
        <XAxis yAxisHeight={yAxisHeight} numberOfHorizontalLines={5}></XAxis>
        <Bars
          yAxisHeight={yAxisHeight}
          yAxisUnitPixels={yAxisUnitPixels}
          bars={data}
          isReadOnly={isReadOnly}
        />
        {/* <BarTrackerLine className="bar-tracker-line" />
          <BarTrackerValue className="bar-tracker-value"></BarTrackerValue> */}
      </StyledBarChart>
    </BarChartContainer>
  );
};

export default BarChart;
