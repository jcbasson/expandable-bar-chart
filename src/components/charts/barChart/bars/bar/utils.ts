import _ from "lodash";
import fp from "lodash/fp";

import {
  restrictNumberToRange,
  roundNumberToNearestMultiple
} from "../../../../../utils/numberUtils";

type CalculateBarHeight = (
  barHeight: number,
  previousYCoordinate: number,
  newYCoordinate: number
) => number;

const calculateBarHeight: CalculateBarHeight = (
  barHeight,
  previousYCoordinate,
  newYCoordinate
) => {
  return barHeight - (newYCoordinate - previousYCoordinate);
};

type RestrictBarYValue = (
  minYValue: number,
  maxYValue: number,
  yValueUnit: number
) => (barYValue: number) => number;
const restrictBarYValue: RestrictBarYValue = (
  minYValue,
  maxYValue,
  yAxisUnit
) => {
  const totalAxisUnits = maxYValue * yAxisUnit;

  return _.partial(restrictNumberToRange, minYValue, totalAxisUnits);
};

type AdjustBarYValueToNearestYAxisUnit = (
  yAxisUnit: number
) => (barYValue: number) => number;
const adjustBarYValueToNearestYAxisUnit: AdjustBarYValueToNearestYAxisUnit = yAxisUnit => {
  return _.partialRight(roundNumberToNearestMultiple, yAxisUnit);
};

type CalculateBarYValue = (maxYValue: number, yAxisUnit: number) => Function;
export const calculateBarYValue: CalculateBarYValue = (
  maxYValue,
  yAxisUnit
) => {
  return fp.pipe(
    calculateBarHeight,
    restrictBarYValue(0, maxYValue, yAxisUnit),
    adjustBarYValueToNearestYAxisUnit(yAxisUnit)
  );
};
