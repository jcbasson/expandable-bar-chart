import { SetMaxY } from "./types";

export const SET_MAX_Y = "SET_MAX_Y";

export const setMaxY: SetMaxY = ({ barChartId, maxY }) => {
  return {
    type: SET_MAX_Y,
    barChartId,
    maxY
  };
};
