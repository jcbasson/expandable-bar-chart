import { IBar } from "./bar";

export interface IBars {
  readonly maxYValue: number;
  readonly bars: IBar[];
  readonly yAxisHeight: number;
}
