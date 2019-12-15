export interface IBarData {
  readonly barName: string;
  readonly yValue: number;
  readonly color: string;
  readonly onYValueChange: Function;
}

export interface IBars {
  readonly bars: IBarData[];
  readonly yAxisHeight: number;
}
