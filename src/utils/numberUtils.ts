type RestrictNumberToRange = (
  min: number,
  max: number,
  valueToRestrict: number
) => number;

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
