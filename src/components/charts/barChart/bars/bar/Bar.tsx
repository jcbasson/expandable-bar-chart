import React, { useRef } from "react";
import { IBar } from "./types";
import { useVerticalResizeHandler } from "./hooks";
import {
  StyledBar,
  VerticalResizeButtonContainer,
  ResizeButton,
  BarLabel
} from "./styled";

const Bar: React.FC<IBar> = ({
  barName,
  yAxisHeight,
  yAxisUnitPixels,
  color,
  onYValueChange,
  isReadOnly,
  yValue
}) => {
  const barRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [resizeButtonRef] = useVerticalResizeHandler({
    barRef,
    yAxisHeight,
    yAxisUnitPixels,
    onYValueChange
  });

  return (
    <StyledBar
      ref={barRef}
      yValue={yValue}
      color={color}
      yAxisUnitPixels={yAxisUnitPixels}
    >
      {!isReadOnly && (
        <VerticalResizeButtonContainer>
          <ResizeButton ref={resizeButtonRef}></ResizeButton>
        </VerticalResizeButtonContainer>
      )}
      <BarLabel>{barName}</BarLabel>
    </StyledBar>
  );
};

export default Bar;
