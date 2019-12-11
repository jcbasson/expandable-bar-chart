import * as React from "react";
import styled from "styled-components";
import _ from "lodash";
import { YMeasurement } from "./YMeasurement";

interface IYAxis {
  readonly height: number;
  readonly maxValue: number;
  readonly valueIncrements: number;
}
export const YAxis: React.FC<IYAxis> = ({
  maxValue,
  valueIncrements,
  height
}) => {
  const yMeasurementHeight = height / valueIncrements;
  const adjustedHeight = height - (height % valueIncrements);
  return (
    <YAxisContainer height={adjustedHeight}>
      {_.range(1, maxValue + 1)
        .reverse()
        .map(i => (
          <YMeasurement
            value={i}
            valueIncrements={valueIncrements}
            height={yMeasurementHeight}
          />
        ))}
    </YAxisContainer>
  );
};

const YAxisContainer = styled.div<Pick<IYAxis, "height">>`
  float: left;
  height: ${({ height }) => height}px;
  width: 10%;
  border-right: 1px solid #8f9092;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
