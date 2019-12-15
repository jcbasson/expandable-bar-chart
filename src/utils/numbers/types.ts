export type RestrictNumberToRange = (
  min: number,
  max: number,
  valueToRestrict: number
) => number;

export type RoundNumberToNearestMultiple = (
  value: number,
  multiple: number
) => number;

export type ConvertStringToInt = (stringValue: string) => number;

export type IsNumberInRange = (
  min: number,
  max: number,
  numberToCheck: number
) => boolean;
