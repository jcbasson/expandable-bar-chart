import styled from "styled-components";
import { IXAxis } from "./types";

export const XAxisContainer = styled.div<Pick<IXAxis, "yAxisHeight">>`
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

export const XAxisLines = styled.span<IXAxis>`
  height: ${({ yAxisHeight, numberOfHorizontalLines }) =>
    yAxisHeight / numberOfHorizontalLines}px;
  width: 100%;
  border-top: 1px solid #e5e6e8;
`;
