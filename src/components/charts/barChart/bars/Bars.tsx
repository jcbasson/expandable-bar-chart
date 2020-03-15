import React from "react";
import { StyledBars } from "./styled";
import Bar from "./bar";
import { IBars } from "./types";

const Bars: React.FC<IBars> = ({
  bars,
  yAxisHeight,
  yAxisUnitPixels,
  isReadOnly
}) => {
  return (
    <StyledBars yAxisHeight={yAxisHeight}>
      {bars.map(bar => (
        <Bar
          key={bar.barName}
          yAxisHeight={yAxisHeight}
          yAxisUnitPixels={yAxisUnitPixels}
          {...bar}
          isReadOnly={isReadOnly}
        />
      ))}
    </StyledBars>
  );
};

export default Bars;
