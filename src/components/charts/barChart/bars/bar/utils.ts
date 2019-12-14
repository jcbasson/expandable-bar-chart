import _ from "lodash";
import fp from "lodash/fp";
import {
  restrictNumberToRange,
  roundNumberToNearestMultiple
} from "../../../../../utils/numberUtils";
import {
  CalculateBarHeight,
  RestrictBarYPixels,
  AdjustBarYValueToNearestYAxisUnit,
  MakeBarHeight,
  CalculateBarTrackerLineYValue,
  ISetBarHeight,
  RestrictBarYValue
} from "./types";

const calculateBarHeight: CalculateBarHeight = (
  barHeight,
  previousYCoordinate,
  newYCoordinate
) => {
  return barHeight - (newYCoordinate - previousYCoordinate);
};

const restrictBarYPixels: RestrictBarYPixels = (
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

export const makeBarHeight: MakeBarHeight = (maxYValue, yAxisUnitPixels) => {
  return fp.pipe(
    calculateBarHeight,
    restrictBarYPixels(0, maxYValue, yAxisUnitPixels),
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

export const setBarHeight: ISetBarHeight = ({
  maxYValue,
  originalBarHeight,
  previousMouseYCoordinate,
  newMouseYCoordinate,
  barElement,
  barTrackerLineElement,
  yAxisUnitPixels
}) => {
  const generateBarHeight = makeBarHeight(maxYValue, yAxisUnitPixels);

  //TODO: Possibly memoize here if performance becomes issue
  const barHeight = generateBarHeight(
    originalBarHeight,
    previousMouseYCoordinate,
    newMouseYCoordinate
  );
  //TODO: Possibly memoize here if performance becomes issue
  barTrackerLineElement.style.top = `${calculateBarTrackerLineYValue(
    barHeight,
    maxYValue,
    yAxisUnitPixels
  )}px`;
  barTrackerLineElement.style.display = "inline-block";
  barElement.style.border = `${barHeight <= 0 ? "none" : "1px solid #000"}`;
  barElement.style.height = `${barHeight}px`;
};

export const restrictBarYValue: RestrictBarYValue = (maxYValue, yValue) => {
  return yValue > maxYValue ? maxYValue : yValue;
};
