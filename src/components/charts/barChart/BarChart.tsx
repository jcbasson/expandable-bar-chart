import React, { useState } from "react";
import styled from "styled-components";
import { YAxis } from "./yAxis";
import { XAxis } from "./xAxis";
import { Bars } from "./bars";
import { IBarChart } from "./types";
import { MaxYSetter } from "./maxYSetter";
import {
  setYAxisMaximum,
  restrictYAxisMaximum,
  calculateYAxisUnitPixels,
  getMinValueAllowedForYAxisMax
} from "./utils";
import { BarChartSettingsContext } from "./context";

export const BarChart: React.FC<IBarChart> = ({
  yAxisHeight,
  xAxisWidth,
  maxValueAllowedForYAxisMax,
  defaultYAxisMax,
  data,
  isReadOnly
}) => {
  const minValueAllowedForYAxisMax = getMinValueAllowedForYAxisMax(data);
  const [maxY, setMaxY] = useState(defaultYAxisMax.toString());
  const maxYValue = restrictYAxisMaximum(
    maxY,
    minValueAllowedForYAxisMax,
    maxValueAllowedForYAxisMax
  );
  const yAxisUnitPixels = calculateYAxisUnitPixels(yAxisHeight, maxYValue);

  return (
    <BarChartSettingsContext.Provider
      value={{
        maxYValue,
        yAxisHeight,
        yAxisUnitPixels,
        isReadOnly
      }}
    >
      <BarChartContainer>
        <MaxYSetter
          maxY={maxY}
          setMaxYHandler={setYAxisMaximum(setMaxY)}
        ></MaxYSetter>
        <StyledBarChart yAxisHeight={yAxisHeight} xAxisWidth={xAxisWidth}>
          <YAxis
            maxYValue={maxYValue}
            yAxisHeight={yAxisHeight}
            yAxisDisplayValueEveryBarCount={5}
          ></YAxis>
          <XAxis yAxisHeight={yAxisHeight} numberOfHorizontalLines={5}></XAxis>
          <Bars yAxisHeight={yAxisHeight} bars={data} />
        </StyledBarChart>
      </BarChartContainer>
    </BarChartSettingsContext.Provider>
  );
};

const BarChartContainer = styled.div`
  padding: 20px 20px 0 0;
  background-color: #f1f2f4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBarChart = styled.div<
  Pick<IBarChart, "yAxisHeight" | "xAxisWidth">
>`
  background-color: #f1f2f4;
  width: ${({ xAxisWidth }) => xAxisWidth + 50}px;
  height: ${({ yAxisHeight }) => yAxisHeight + 50}px;
  position: relative;
`;
