import styled from "styled-components";
import { IYAxis } from "./types";

export const YAxisContainer = styled.div<Pick<IYAxis, "yAxisHeight">>`
  float: left;
  height: ${({ yAxisHeight }) => yAxisHeight}px;
  width: 10%;
  border-right: 1px solid #8f9092;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const YMeasurementContainer = styled.div<{ yAxisUnitPixels: number }>`
  flex: 0 0 ${({ yAxisUnitPixels }) => yAxisUnitPixels}px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
`;

export const YMeasurementValue = styled.span`
  color: #898a8c;
  font-weight: bold;
  width: 30px;
  position: absolute;
  top: -10px;
  right: 10px;
`;

export const YMeasurementLine = styled.span`
  border-top: 1px solid #8f9092;
  width: 10px;
  color: red;
  position: absolute;
  top: 0px;
`;
