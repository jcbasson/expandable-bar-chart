import _ from "lodash";
import fp from "lodash/fp";
import {
  restrictNumberToRange,
  roundNumberToNearestMultiple
} from "../../../../../utils/numbers/numberUtils";
import {
  CalculateBarHeight,
  RestrictBarYPixels,
  AdjustBarYValueToNearestYAxisUnit,
  MakeBarHeight,
  SetBarHeight,
  RestrictBarYValue,
  GetBarHeight,
  CalculateCurrentYValue
} from "./types";

const calculateBarHeight: CalculateBarHeight = (
  barHeight,
  previousYCoordinate,
  newYCoordinate
) => {
  return barHeight - (newYCoordinate - previousYCoordinate);
};

const restrictBarYPixels: RestrictBarYPixels = (minYValue, maxYValue) => {
  return _.partial(restrictNumberToRange, minYValue, maxYValue);
};

const adjustBarYValueToNearestYAxisUnit: AdjustBarYValueToNearestYAxisUnit = yAxisUnitPixels => {
  return _.partialRight(roundNumberToNearestMultiple, yAxisUnitPixels);
};

export const makeCalculateBarHeight: MakeBarHeight = (
  yAxisHeight,
  yAxisUnitPixels
) => {
  return fp.pipe(
    calculateBarHeight,
    restrictBarYPixels(0, yAxisHeight),
    adjustBarYValueToNearestYAxisUnit(yAxisUnitPixels)
  );
};

export const setBarHeight: SetBarHeight = ({
  yAxisHeight,
  originalBarHeight,
  previousMouseYCoordinate,
  newMouseYCoordinate,
  barElement,
  yAxisUnitPixels
}) => {
  const generateBarHeight = makeCalculateBarHeight(
    yAxisHeight,
    yAxisUnitPixels
  );
  //TODO: Possibly memoize here if performance becomes issue
  const barHeight = generateBarHeight(
    originalBarHeight,
    previousMouseYCoordinate,
    newMouseYCoordinate
  );
  barElement.style.border = `${barHeight <= 0 ? "none" : "1px solid #000"}`;
  barElement.style.height = `${barHeight}px`;
};

export const restrictBarYValue: RestrictBarYValue = (maxYValue, yValue) => {
  return yValue > maxYValue ? maxYValue : yValue;
};

export const getBarHeight: GetBarHeight = barElement => {
  return parseFloat(
    getComputedStyle(barElement, null)
      .getPropertyValue("height")
      .replace("px", "")
  );
};

export const calculateCurrentYValue: CalculateCurrentYValue = (
  barHeight,
  yAxisUnitPixels
) => {
  return Math.ceil(barHeight / yAxisUnitPixels);
};
