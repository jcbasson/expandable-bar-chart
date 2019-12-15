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
  readonly yAxisHeight: number;
  readonly onYValueChange: Function;
}

export type CalculateBarHeight = (
  barHeight: number,
  previousYCoordinate: number,
  newYCoordinate: number
) => number;

export type RestrictBarYPixels = (
  minYValue: number,
  maxYValue: number
) => (barYValue: number) => number;

export type AdjustBarYValueToNearestYAxisUnit = (
  yAxisUnitPixels: number
) => (barYValue: number) => number;

export type MakeBarHeight = (
  yAxisHeight: number,
  yAxisUnitPixels: number
) => Function;

export type CalculateBarTrackerYCoordinate = (
  barYValue: number,
  yAxisHeight: number
) => number;

export interface ISetBarHeightParams {
  readonly yAxisHeight: number;
  readonly originalBarHeight: number;
  readonly previousMouseYCoordinate: number;
  readonly newMouseYCoordinate: number;
  readonly barElement: HTMLElement;
  readonly yAxisUnitPixels: number;
}
export type SetBarHeight = (params: ISetBarHeightParams) => void;

export interface ISetBarTrackerParams {
  readonly barElement: HTMLElement;
  readonly yAxisHeight: number;
  readonly yAxisUnitPixels: number;
  readonly barTrackerLineElement: HTMLElement;
  readonly barTrackerValueElement: HTMLElement;
}
export type SetBarTracker = (params: ISetBarTrackerParams) => void;

export type RestrictBarYValue = (maxYValue: number, yValue: number) => number;

export interface UseVerticalResizeHandlerParams {
  barRef: React.MutableRefObject<HTMLDivElement>;
  yAxisHeight: number;
  yAxisUnitPixels: number;
  onYValueChange: Function;
}

export type UseVerticalResizeHandler = (
  params: UseVerticalResizeHandlerParams
) => any[];

export type GetBarHeight = (barElement: HTMLElement) => number;

export type CalculateCurrentYValue = (
  barHeight: number,
  yAxisUnitPixels: number
) => number;
