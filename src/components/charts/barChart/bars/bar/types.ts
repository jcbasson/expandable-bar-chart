import React from "react";

export interface IBar {
  readonly barName: string;
  readonly yValue: number;
  readonly color: string;
  readonly onYValueChange: Function;
}

export interface IVerticalResizeButton {
  readonly barRef: React.MutableRefObject<HTMLDivElement>;
  readonly yAxisUnitPixels: number;
  readonly maxYValue: number;
  readonly onYValueChange: Function;
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

export interface UseVerticalResizeHandlerParams {
  barRef: React.MutableRefObject<HTMLDivElement>;
  maxYValue: number;
  yAxisUnitPixels: number;
  onYValueChange: Function;
}

export type UseVerticalResizeHandler = (
  params: UseVerticalResizeHandlerParams
) => any[];

export type GetBarHeight = (barElement: HTMLElement) => number;

export type CalculateCurrentYValue = (
  barElement: HTMLElement,
  yAxisUnitPixels: number
) => number;
