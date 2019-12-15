import React, { useRef } from "react";
import styled from "styled-components";
import { useVerticalResizeHandler } from "./hooks";
import { IVerticalResizeButton } from "./types";

export const VerticalResizeButton: React.FC<IVerticalResizeButton> = ({
  barRef,
  yAxisUnitPixels,
  onYValueChange,
  yAxisHeight
}) => {
  const [resizeButtonRef] = useVerticalResizeHandler({
    barRef,
    yAxisHeight,
    yAxisUnitPixels,
    onYValueChange
  });

  return (
    <VerticalResizeButtonContainer>
      <ResizeButton ref={resizeButtonRef}></ResizeButton>
    </VerticalResizeButtonContainer>
  );
};

const VerticalResizeButtonContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ResizeButton = styled.span`
  width: 14px;
  height: 14px;
  background: white;
  border: 1px solid #000;
  position: relative;
  top: -7px;
  cursor: ns-resize;
  z-index: 20;
`;
