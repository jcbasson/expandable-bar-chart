import * as React from "react";
import styled from "styled-components";
import _ from "lodash";

interface IYMeasurement {
  readonly height: number;
  readonly value: number;
  readonly valueIncrements: number;
}

export const YMeasurement: React.FC<IYMeasurement> = ({
  value,
  valueIncrements,
  height
}) => {
  const displayValue = value % valueIncrements === 0;
  return (
    <YMeasurementContainer height={height}>
      {displayValue && <YMeasurementValue>{value}</YMeasurementValue>}
      <YMeasurementLine></YMeasurementLine>
    </YMeasurementContainer>
  );
};

const YMeasurementContainer = styled.div<Pick<IYMeasurement, "height">>`
  flex: 0 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
`;

const YMeasurementValue = styled.span`
  color: #898a8c;
  font-weight: bold;
  width: 20px;
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
