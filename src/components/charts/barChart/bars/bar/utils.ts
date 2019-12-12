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

type CalculateBarTrackerLineYValue = (
  barYValue: number,
  maxYValue: number,
  yAxisUnit: number
) => number;
const calculateBarTrackerLineYValue: CalculateBarTrackerLineYValue = (
  barHeight,
  maxYValue,
  yAxisUnit
) => {
  return maxYValue * yAxisUnit - barHeight;
};

interface ISetBarYValueParams {
  readonly maxYValue: number;
  readonly originalBarHeight: number;
  readonly previousMouseYCoordinate: number;
  readonly newMouseYCoordinate: number;
  readonly barElement: HTMLElement;
  readonly barTrackerLineElement: HTMLElement;
  readonly yAxisUnit: number;
}
type ISetBarYValue = (params: ISetBarYValueParams) => void;
export const setBarYValue: ISetBarYValue = ({
  maxYValue,
  originalBarHeight,
  previousMouseYCoordinate,
  newMouseYCoordinate,
  barElement,
  barTrackerLineElement,
  yAxisUnit
}) => {
  const makeBarHeight = calculateBarYValue(maxYValue, yAxisUnit);
  const barHeight = makeBarHeight(
    originalBarHeight,
    previousMouseYCoordinate,
    newMouseYCoordinate
  );
  barTrackerLineElement.style.top = `${calculateBarTrackerLineYValue(
    barHeight,
    maxYValue,
    yAxisUnit
  )}px`;
  barTrackerLineElement.style.display = "inline-block";
  barElement.style.border = `${barHeight <= 0 ? "none" : "1px solid #000"}`;
  barElement.style.height = `${barHeight}px`;
};
