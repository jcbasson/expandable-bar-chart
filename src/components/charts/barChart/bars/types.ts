import { IBar } from "./bar/types";

export interface IBars {
  readonly maxYValue: number;
  readonly bars: IBar[];
  readonly yAxisHeight: number;
}
