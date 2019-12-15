import { IBarData } from "./bars/types";

export interface IBarChart {
  readonly yAxisHeight: number;
  readonly xAxisWidth: number;
  readonly maxValueAllowedForYAxisMax: number;
  readonly defaultYAxisMax: number;
  readonly data: IBarData[];
  readonly isReadOnly: boolean;
}

export interface IBarChartSettingsContext {
  readonly maxYValue: number;
  readonly yAxisHeight: number;
  readonly yAxisUnitPixels: number;
  readonly isReadOnly: boolean;
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

export type BarYValueMinComparator = (
  minYValue: number,
  barData: IBarData
) => number;

export type GetMinValueAllowedForYAxisMax = (barData: IBarData[]) => number;
