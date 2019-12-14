export interface IBar {
  readonly id: string;
  readonly yCoordinate: number;
  readonly color: string;
  readonly maxYValue: number;
  readonly chartBarId: string;
  readonly yAxisHeight: number;
}

export type CalculateBarHeight = (
  barHeight: number,
  previousYCoordinate: number,
  newYCoordinate: number
) => number;

export type RestrictBarYPixels = (
  minYValue: number,
  maxYValue: number,
  yAxisUnitPixels: number
) => (barYValue: number) => number;

export type AdjustBarYValueToNearestYAxisUnit = (
  yAxisUnitPixels: number
) => (barYValue: number) => number;

export type MakeBarHeight = (
  maxYValue: number,
  yAxisUnitPixels: number
) => Function;

export type CalculateBarTrackerLineYValue = (
  barYValue: number,
  maxYValue: number,
  yAxisUnitPixels: number
) => number;

export interface ISetBarHeightParams {
  readonly maxYValue: number;
  readonly originalBarHeight: number;
  readonly previousMouseYCoordinate: number;
  readonly newMouseYCoordinate: number;
  readonly barElement: HTMLElement;
  readonly barTrackerLineElement: HTMLElement;
  readonly yAxisUnitPixels: number;
}
export type ISetBarHeight = (params: ISetBarHeightParams) => void;

export type RestrictBarYValue = (maxYValue: number, yValue: number) => number;
