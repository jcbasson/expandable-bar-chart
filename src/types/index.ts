export interface IBarChartState {
  maxY: number;
}

export interface IBarChartsState {
  byId: {
    [barChartId: string]: IBarChartState | null;
  };
}

export interface IState {
  charts: {
    barCharts: IBarChartsState;
  };
}
