import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { DragButton } from "../dragButton";

interface IBar {
  readonly yCoord: number;
}

export const Bar: React.FC<IBar> = ({ yCoord, children }) => {
  return (
    <StyledBar yCoord={yCoord}>
      <BarDragButton>
        <DragButton></DragButton>
      </BarDragButton>
      {children}
    </StyledBar>
  );
};

const StyledBar = styled.div<IBar>`
  grid-row-end: 101;
  width: 100%;
  grid-row-start: ${({ yCoord }) => (yCoord > 101 ? 101 : yCoord)};
  border: 1px solid #000;
  background-color: #ff4136;
  display: flex;
  flex-direction: column;
`;

const BarDragButton = styled.div`
  position: relative;
  top: -4px;
  height: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
`;
