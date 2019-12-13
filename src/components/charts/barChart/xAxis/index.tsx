import * as React from "react";
import styled from "styled-components";
import _ from "lodash";

interface IXAxis {
  readonly numberOfHorizontalLines: number;
  readonly yAxisHeight: number;
}
//TODO: Break out the horizontal lines from the x-axis, left it here to simplify things for now
export const XAxis: React.FC<IXAxis> = ({
  yAxisHeight,
  numberOfHorizontalLines
}) => {
  return (
    <XAxisContainer yAxisHeight={yAxisHeight}>
      {_.range(0, numberOfHorizontalLines)
        .reverse()
        .map((axisLineCount: number) => (
          <XAxisLines
            key={axisLineCount}
            yAxisHeight={yAxisHeight}
            numberOfHorizontalLines={numberOfHorizontalLines}
          />
        ))}
    </XAxisContainer>
  );
};

const XAxisContainer = styled.div<Pick<IXAxis, "yAxisHeight">>`
  float: left;
  position: absolute;
  top: 0;
  right: 0;
  height: ${({ yAxisHeight }) => yAxisHeight}px;
  width: 90%;
  z-index: 0;
  border-bottom: 1px solid #8f9092;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const XAxisLines = styled.span<IXAxis>`
  height: ${({ yAxisHeight, numberOfHorizontalLines }) =>
    yAxisHeight / numberOfHorizontalLines}px;
  width: 100%;
  border-top: 1px solid #e5e6e8;
`;
