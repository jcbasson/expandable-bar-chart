export interface IMaxYSetter {
  readonly barChartId: string;
  readonly maxY: number;
}

export type SetMaxY = ({
  barChartId,
  maxY
}: {
  barChartId: string;
  maxY: number;
}) => { type: string; barChartId: string; maxY: number };
