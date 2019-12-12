import React from "react";
import styled from "styled-components";
import { useVerticalResizeHandler } from "./hooks";

export interface IVerticalResizeButton {
  readonly barId: string;
  readonly barRef: React.MutableRefObject<HTMLDivElement>;
  readonly maxYValue: number;
}

export const VerticalResizeButton: React.FC<IVerticalResizeButton> = ({
  barId,
  barRef,
  maxYValue
}) => {
  const [resizeButtonRef] = useVerticalResizeHandler({
    barId,
    barRef,
    maxYValue
  });
  return (
    <VerticalResizeButtonContainer>
      <ResizeButton ref={resizeButtonRef}></ResizeButton>
    </VerticalResizeButtonContainer>
  );
};

const VerticalResizeButtonContainer = styled.div`
  width: 100%;
  height: 100%;
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
