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

export type RestrictBarYValue = (
  minYValue: number,
  maxYValue: number,
  yAxisUnitPixels: number
) => (barYValue: number) => number;

export type AdjustBarYValueToNearestYAxisUnit = (
  yAxisUnitPixels: number
) => (barYValue: number) => number;

export type CalculateBarYValue = (
  maxYValue: number,
  yAxisUnitPixels: number
) => Function;

export type CalculateBarTrackerLineYValue = (
  barYValue: number,
  maxYValue: number,
  yAxisUnitPixels: number
) => number;

export interface ISetBarYValueParams {
  readonly maxYValue: number;
  readonly originalBarHeight: number;
  readonly previousMouseYCoordinate: number;
  readonly newMouseYCoordinate: number;
  readonly barElement: HTMLElement;
  readonly barTrackerLineElement: HTMLElement;
  readonly yAxisUnitPixels: number;
}
export type ISetBarYValue = (params: ISetBarYValueParams) => void;
