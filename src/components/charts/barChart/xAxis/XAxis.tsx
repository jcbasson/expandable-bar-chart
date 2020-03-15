import React from "react";
import range from "lodash/range";
import { IXAxis } from "./types";
import { XAxisContainer, XAxisLines } from "./styled";

//TODO: Break out the horizontal lines from the x-axis, left it here to simplify things for now
const XAxis: React.FC<IXAxis> = ({ yAxisHeight, numberOfHorizontalLines }) => {
  return (
    <XAxisContainer yAxisHeight={yAxisHeight}>
      {range(0, numberOfHorizontalLines)
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

export default XAxis;
