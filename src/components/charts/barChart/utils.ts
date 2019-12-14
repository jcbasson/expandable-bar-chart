import { createSelector } from "reselect";
import _ from "lodash";
import {
  GetBarChartById,
  GetBarChartMaxY,
  CalculateYAxisUnitPx,
  CalculateYAxisUnitPixels,
  UpdateBarChartMaxY
} from "./types";

export const makeGetBarChartMaxY = () =>
  createSelector(getCBarChartId, getBarChartMaxY);

export const getCBarChartId: GetBarChartById = (state, barChartId) => {
  return _.get(state, `barCharts.byId.${barChartId}`);
};

export const getBarChartMaxY: GetBarChartMaxY = barChart => {
  return _.get(barChart, "maxY", 0);
};

export const calculateYAxisUnitPx: CalculateYAxisUnitPx = (
  maxYValue,
  yAxisHeight
) => Math.floor(yAxisHeight / maxYValue);

export const calculateYAxisUnitPixels: CalculateYAxisUnitPixels = (
  yAxisHeight,
  maxYValue
) => {
  return yAxisHeight / maxYValue;
};

export const updateBarChartMaxY: UpdateBarChartMaxY = (
  barChartsState,
  barChartId,
  maxY
) => {
  const barCharts = _.get(barChartsState, "byId");

  return {
    byId: {
      ...barCharts,
      [barChartId]: {
        maxY
      }
    }
  };
};
