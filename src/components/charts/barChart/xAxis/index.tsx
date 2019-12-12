import * as React from "react";
import styled from "styled-components";
import _ from "lodash";

interface IXAxis {
  readonly maxYValue: number;
  readonly yValueIncrements: number;
}
export const XAxis: React.FC<IXAxis> = ({ maxYValue, yValueIncrements }) => {
  const numberOfXAxisLines = maxYValue / yValueIncrements;

  return (
    <XAxisContainer maxYValue={maxYValue}>
      {_.range(0, numberOfXAxisLines)
        .reverse()
        .map((axisLineCount: number) => (
          <XAxisLines key={axisLineCount} yValueIncrements={yValueIncrements} />
        ))}
    </XAxisContainer>
  );
};

const XAxisContainer = styled.div<Pick<IXAxis, "maxYValue">>`
  float: left;
  position: absolute;
  top: 0;
  right: 0;
  height: ${({ maxYValue }) => maxYValue * 20}px;
  width: 90%;
  z-index: 0;
  border-bottom: 1px solid #8f9092;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const XAxisLines = styled.span<{ yValueIncrements: number }>`
  height: ${({ yValueIncrements }) => yValueIncrements * 20}px;
  width: 100%;
  border-top: 1px solid #e5e6e8;
`;
