import _ from "lodash";
import fp from "lodash/fp";
import {
  restrictNumberToRange,
  roundNumberToNearestMultiple
} from "../../../../../utils/numberUtils";
import {
  CalculateBarHeight,
  RestrictBarYValue,
  AdjustBarYValueToNearestYAxisUnit,
  CalculateBarYValue,
  CalculateBarTrackerLineYValue,
  ISetBarYValue
} from "./types";

const calculateBarHeight: CalculateBarHeight = (
  barHeight,
  previousYCoordinate,
  newYCoordinate
) => {
  return barHeight - (newYCoordinate - previousYCoordinate);
};

const restrictBarYValue: RestrictBarYValue = (
  minYValue,
  maxYValue,
  yAxisUnitPixels
) => {
  const totalAxisUnits = maxYValue * yAxisUnitPixels;

  return _.partial(restrictNumberToRange, minYValue, totalAxisUnits);
};

const adjustBarYValueToNearestYAxisUnit: AdjustBarYValueToNearestYAxisUnit = yAxisUnitPixels => {
  return _.partialRight(roundNumberToNearestMultiple, yAxisUnitPixels);
};

export const calculateBarYValue: CalculateBarYValue = (
  maxYValue,
  yAxisUnitPixels
) => {
  return fp.pipe(
    calculateBarHeight,
    restrictBarYValue(0, maxYValue, yAxisUnitPixels),
    adjustBarYValueToNearestYAxisUnit(yAxisUnitPixels)
  );
};

const calculateBarTrackerLineYValue: CalculateBarTrackerLineYValue = (
  barHeight,
  maxYValue,
  yAxisUnitPixels
) => {
  return maxYValue * yAxisUnitPixels - barHeight;
};

export const setBarYValue: ISetBarYValue = ({
  maxYValue,
  originalBarHeight,
  previousMouseYCoordinate,
  newMouseYCoordinate,
  barElement,
  barTrackerLineElement,
  yAxisUnitPixels
}) => {
  const makeBarHeight = calculateBarYValue(maxYValue, yAxisUnitPixels);
  const barHeight = makeBarHeight(
    originalBarHeight,
    previousMouseYCoordinate,
    newMouseYCoordinate
  );
  barTrackerLineElement.style.top = `${calculateBarTrackerLineYValue(
    barHeight,
    maxYValue,
    yAxisUnitPixels
  )}px`;
  barTrackerLineElement.style.display = "inline-block";
  barElement.style.border = `${barHeight <= 0 ? "none" : "1px solid #000"}`;
  barElement.style.height = `${barHeight}px`;
};
