import { App } from "./app";
import { barChartReducer } from "./charts/barChart";

const reducers = {
  barCharts: barChartReducer
};
export { App, reducers };
