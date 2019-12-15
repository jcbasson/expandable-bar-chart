import { IBarData } from "./bars/types";

export interface IBarChart {
  readonly yAxisHeight: number;
  readonly xAxisWidth: number;
  readonly data: IBarData[];
}

export interface IBarChartSettingsContext {
  readonly maxYValue: number;
  readonly yAxisHeight: number;
  readonly yAxisUnitPixels: number;
}

export type CalculateYAxisUnitPx = (
  maxYValue: number,
  yAxisHeight: number
) => number;

export type CalculateYAxisUnitPixels = (
  yAxisHeight: number,
  maxYValue: number
) => number;

export type RestrictYAxisMaximum = (
  maxY: string,
  minValMaxY: number,
  maxValMaxY: number
) => number;
