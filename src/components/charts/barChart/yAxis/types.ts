export interface IYAxis {
  readonly maxYValue: number;
  readonly yAxisHeight: number;
  readonly yAxisDisplayValueEveryBarCount: number;
  readonly yAxisUnitPixels: number;
}

export interface IYMeasurement {
  readonly value: number;
  readonly displayValue: boolean;
  readonly yAxisUnitPixels: number;
}
