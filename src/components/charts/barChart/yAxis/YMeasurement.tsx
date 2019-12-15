import * as React from "react";
import styled from "styled-components";
import { IYMeasurement } from "./types";
import { BarChartSettingsContext } from "../context";

export const YMeasurement: React.FC<IYMeasurement> = ({
  value,
  displayValue
}) => {
  return (
    <BarChartSettingsContext.Consumer>
      {({ yAxisUnitPixels }) => (
        <YMeasurementContainer yAxisUnitPixels={yAxisUnitPixels}>
          {displayValue && <YMeasurementValue>{value}</YMeasurementValue>}
          <YMeasurementLine></YMeasurementLine>
        </YMeasurementContainer>
      )}
    </BarChartSettingsContext.Consumer>
  );
};

const YMeasurementContainer = styled.div<{ yAxisUnitPixels: number }>`
  flex: 0 0 ${({ yAxisUnitPixels }) => yAxisUnitPixels}px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
`;

const YMeasurementValue = styled.span`
  color: #898a8c;
  font-weight: bold;
  width: 30px;
  position: absolute;
  top: -10px;
  right: 10px;
`;

const YMeasurementLine = styled.span`
  border-top: 1px solid #8f9092;
  width: 10px;
  color: red;
  position: absolute;
  top: 0px;
`;
