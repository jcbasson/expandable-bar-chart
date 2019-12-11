import * as React from "react";
import styled from "styled-components";
import _ from "lodash";

interface IXAxis {
  readonly maxValue: number;
  readonly height: number;
  readonly valueIncrements: number;
}
export const XAxis: React.FC<IXAxis> = ({
  maxValue,
  valueIncrements,
  height
}) => {
  const numberOfXAxisLines = maxValue / valueIncrements;
  const adjustedHeight = height - (height % valueIncrements);
  const distanceBetweenXAxisLines = Math.floor(height / numberOfXAxisLines);
  return (
    <XAxisContainer height={adjustedHeight}>
      {_.range(0, numberOfXAxisLines)
        .reverse()
        .map(i => (
          <XAxisLines height={distanceBetweenXAxisLines} />
        ))}
    </XAxisContainer>
  );
};

const XAxisContainer = styled.div<Pick<IXAxis, "height">>`
  float: left;
  position: absolute;
  top: 10px;
  right: 0;
  height: ${({ height }) => height}px;
  width: 90%;
  z-index: 0;
  border-bottom: 1px solid #8f9092;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const XAxisLines = styled.span<{ height: number }>`
  height: ${({ height }) => height}px;
  width: 100%;
  border-top: 1px solid #e5e6e8;
`;
