import {
  RestrictNumberToRange,
  RoundNumberToNearestMultiple,
  ConvertStringToInt,
  IsNumberInRange
} from "./types";

export const restrictNumberToRange: RestrictNumberToRange = (
  min,
  max,
  valueToRestrict
) => {
  if (valueToRestrict < min) {
    return min;
  }

  if (valueToRestrict > max) {
    return max;
  }

  return valueToRestrict;
};

export const roundNumberToNearestMultiple: RoundNumberToNearestMultiple = (
  value,
  multiple
) => {
  return Math.ceil(value / multiple) * multiple;
};

export const convertStringToInt: ConvertStringToInt = stringValue => {
  try {
    return parseInt(stringValue, 10);
  } catch (ex) {
    return NaN;
  }
};

export const isNumberInRange: IsNumberInRange = (min, max, numberToCheck) => {
  return numberToCheck >= min && numberToCheck <= max;
};
