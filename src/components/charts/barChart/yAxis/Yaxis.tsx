import * as React from "react";
import styled from "styled-components";
import _ from "lodash";
import { YMeasurement } from "./YMeasurement";

interface IYAxis {
  readonly maxYValue: number;
  readonly yValueIncrements: number;
}
export const YAxis: React.FC<IYAxis> = ({ maxYValue, yValueIncrements }) => {
  return (
    <YAxisContainer maxYValue={maxYValue}>
      {_.range(1, maxYValue + 1)
        .reverse()
        .map(i => (
          <YMeasurement value={i} valueIncrements={yValueIncrements} />
        ))}
    </YAxisContainer>
  );
};

const YAxisContainer = styled.div<Pick<IYAxis, "maxYValue">>`
  float: left;
  height: ${({ maxYValue }) => maxYValue * 20}px;
  width: 10%;
  border-right: 1px solid #8f9092;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
