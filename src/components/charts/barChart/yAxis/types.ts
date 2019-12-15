export interface IYAxis {
  readonly maxYValue: number;
  readonly yAxisHeight: number;
  readonly yAxisDisplayValueEveryBarCount: number;
}

export interface IYMeasurement {
  readonly value: number;
  readonly displayValue: boolean;
}
