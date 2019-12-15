import _ from "lodash";
import fp from "lodash/fp";
import {
  restrictNumberToRange,
  roundNumberToNearestMultiple
} from "../../../../../utils/numbers/numberUtils";
import { setElementsDisplay } from "../../../../../utils/dom/domUtils";
import {
  CalculateBarHeight,
  RestrictBarYPixels,
  AdjustBarYValueToNearestYAxisUnit,
  MakeBarHeight,
  CalculateBarTrackerYCoordinate,
  SetBarHeight,
  RestrictBarYValue,
  GetBarHeight,
  CalculateCurrentYValue,
  SetBarTracker
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

export const makeBarHeight: MakeBarHeight = (yAxisHeight, yAxisUnitPixels) => {
  return fp.pipe(
    calculateBarHeight,
    restrictBarYPixels(0, yAxisHeight),
    adjustBarYValueToNearestYAxisUnit(yAxisUnitPixels)
  );
};

const calculateBarTrackerYCoordinate: CalculateBarTrackerYCoordinate = (
  barHeight,
  yAxisHeight
) => {
  return yAxisHeight - barHeight;
};

export const setBarHeight: SetBarHeight = ({
  yAxisHeight,
  originalBarHeight,
  previousMouseYCoordinate,
  newMouseYCoordinate,
  barElement,
  yAxisUnitPixels
}) => {
  const generateBarHeight = makeBarHeight(yAxisHeight, yAxisUnitPixels);
  //TODO: Possibly memoize here if performance becomes issue
  const barHeight = generateBarHeight(
    originalBarHeight,
    previousMouseYCoordinate,
    newMouseYCoordinate
  );
  barElement.style.border = `${barHeight <= 0 ? "none" : "1px solid #000"}`;
  barElement.style.height = `${barHeight}px`;
};

export const setBarTracker: SetBarTracker = ({
  barElement,
  yAxisHeight,
  yAxisUnitPixels,
  barTrackerLineElement,
  barTrackerValueElement
}) => {
  const barHeight = getBarHeight(barElement);
  const barTrackerCoordinate = calculateBarTrackerYCoordinate(
    barHeight,
    yAxisHeight
  );
  const barTrackerValue = calculateCurrentYValue(barHeight, yAxisUnitPixels);
  barTrackerLineElement.style.top = `${barTrackerCoordinate}px`;
  barTrackerValueElement.style.top = `${barTrackerCoordinate - 5}px`;
  barTrackerValueElement.innerHTML = `${barTrackerValue}`;

  setElementsDisplay(
    [barTrackerLineElement, barTrackerValueElement],
    "inline-block"
  );
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
