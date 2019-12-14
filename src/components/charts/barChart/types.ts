import { IState, IBarChartState } from "../../../types";
import { IBarChartsState } from "../../../types";

export interface IBarChart {
  readonly id: string;
  readonly height: number;
  readonly width: number;
  readonly data: IBarData[];
}

export interface IBarData {
  readonly chartId: string;
  readonly yValue: number;
  readonly color: string;
  readonly onYValueChange: Function;
}

export type GetBarChartById = (
  state: IState,
  barChartId: string
) => IBarChartState;

export type GetBarChartMaxY = (barChart: IBarChartState) => number;

export type CalculateYAxisUnitPx = (
  maxYValue: number,
  yAxisHeight: number
) => number;

export type CalculateYAxisUnitPixels = (
  yAxisHeight: number,
  maxYValue: number
) => number;

export type UpdateBarChartMaxY = (
  barChartsState: IBarChartsState,
  barChartId: string,
  maxY: number
) => IBarChartsState;
