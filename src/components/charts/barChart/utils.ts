import { SyntheticEvent } from "react";
import _ from "lodash";
import {
  CalculateYAxisUnitPx,
  CalculateYAxisUnitPixels,
  RestrictYAxisMaximum
} from "./types";
import {
  convertStringToInt,
  isNumberInRange
} from "../../../utils/numberUtils";

export const calculateYAxisUnitPx: CalculateYAxisUnitPx = (
  maxYValue,
  yAxisHeight
) => Math.floor(yAxisHeight / maxYValue);

export const calculateYAxisUnitPixels: CalculateYAxisUnitPixels = (
  yAxisHeight,
  maxYValue
) => {
  return yAxisHeight / maxYValue;
};

export const setYAxisMaximum = (
  setMaxY: React.Dispatch<React.SetStateAction<string>>
) => (event: SyntheticEvent) => {
  const maxYValue = _.get(event, "target.value", "");
  setMaxY(isNaN(maxYValue) ? "" : maxYValue);
};

export const restrictYAxisMaximum: RestrictYAxisMaximum = (
  maxY,
  minValMaxY,
  maxValMaxY
) => {
  /* See if the max Y axis value is in a range
     If max Y is not a number or smaller than the min value it is allowed to be return the min value it is allowed to be
     If max Y is a number and is greater than the max value it is allowed to be return the max value it is allowed to be
  */
  const maxYValue = convertStringToInt(maxY);
  if (!isNaN(maxYValue) && isNumberInRange(minValMaxY, maxValMaxY, maxYValue)) {
    return maxYValue;
  } else if (isNaN(maxYValue) || maxYValue < minValMaxY) {
    return minValMaxY;
  } else if (!isNaN(maxYValue) && maxYValue > maxValMaxY) {
    return maxValMaxY;
  }
};
