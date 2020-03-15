import styled from "styled-components";
import { IBar } from "./types";

export const StyledBar = styled.div<
  Pick<IBar, "color" | "yValue" | "yAxisUnitPixels">
>`
  background-color: ${({ color }) => color};
  width: 100px;
  height: ${({ yValue, yAxisUnitPixels }) => yValue * yAxisUnitPixels}px;
  border: 1px solid #000;
`;

export const BarLabel = styled.label`
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 20px;
`;

export const VerticalResizeButtonContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ResizeButton = styled.span`
  width: 14px;
  height: 14px;
  background: white;
  border: 1px solid #000;
  position: relative;
  top: -7px;
  cursor: ns-resize;
  z-index: 20;
`;
