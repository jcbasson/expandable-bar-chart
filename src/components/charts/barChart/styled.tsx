import styled from "styled-components";
import { IBarChart } from "./types";

export const BarChartContainer = styled.div`
  padding: 20px 20px 0 0;
  background-color: #f1f2f4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledBarChart = styled.div<
  Pick<IBarChart, "yAxisHeight" | "xAxisWidth">
>`
  background-color: #f1f2f4;
  width: ${({ xAxisWidth }) => xAxisWidth + 50}px;
  height: ${({ yAxisHeight }) => yAxisHeight + 50}px;
  position: relative;
`;

export const BarTrackerLine = styled.span`
  border: 1px dashed #000;
  align-self: start;
  width: 450px;
  position: absolute;
  left: -26px;
  display: none;
`;

export const BarTrackerValue = styled.span`
  align-self: start;
  position: absolute;
  right: -24px;
  top: -6px;
  display: none;
`;
