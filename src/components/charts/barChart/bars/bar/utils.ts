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
  SetBar,
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

const calculateBarTrackerYCoordinate: CalculateBarTrackerYCoordinate = (
  barHeight,
  maxYValue,
  yAxisUnitPixels
) => {
  return maxYValue * yAxisUnitPixels - barHeight;
};

export const setBar: SetBar = ({
  maxYValue,
  originalBarHeight,
  previousMouseYCoordinate,
  newMouseYCoordinate,
  barElement,
  barTrackerLineElement,
  barTrackerValueElement,
  yAxisUnitPixels
}) => {
  const generateBarHeight = makeBarHeight(maxYValue, yAxisUnitPixels);
  //TODO: Possibly memoize here if performance becomes issue
  const barHeight = generateBarHeight(
    originalBarHeight,
    previousMouseYCoordinate,
    newMouseYCoordinate
  );

  setBarTracker(
    barHeight,
    maxYValue,
    yAxisUnitPixels
  )(barTrackerLineElement, barTrackerValueElement);

  barElement.style.border = `${barHeight <= 0 ? "none" : "1px solid #000"}`;
  barElement.style.height = `${barHeight}px`;
};

const setBarTracker: SetBarTracker = (
  barHeight,
  maxYValue,
  yAxisUnitPixels
) => {
  //TODO: Possibly memoize here if performance becomes issue
  const barTrackerCoordinate = calculateBarTrackerYCoordinate(
    barHeight,
    maxYValue,
    yAxisUnitPixels
  );
  const barTrackerValue = calculateCurrentYValue(barHeight, yAxisUnitPixels);
  return (barTrackerLineElement, barTrackerValueElement) => {
    barTrackerLineElement.style.top = `${barTrackerCoordinate}px`;
    barTrackerValueElement.style.top = `${barTrackerCoordinate - 5}px`;
    barTrackerValueElement.innerHTML = `${barTrackerValue}`;

    setElementsDisplay(
      [barTrackerLineElement, barTrackerValueElement],
      "inline-block"
    );
  };
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
