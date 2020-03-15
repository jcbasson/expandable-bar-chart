import React from "react";
import { IYMeasurement } from "./types";
import {
  YMeasurementContainer,
  YMeasurementValue,
  YMeasurementLine
} from "./styled";

const YMeasurement: React.FC<IYMeasurement> = ({
  value,
  displayValue,
  yAxisUnitPixels
}) => {
  return (
    <YMeasurementContainer yAxisUnitPixels={yAxisUnitPixels}>
      {displayValue && <YMeasurementValue>{value}</YMeasurementValue>}
      <YMeasurementLine></YMeasurementLine>
    </YMeasurementContainer>
  );
};

export default YMeasurement;
