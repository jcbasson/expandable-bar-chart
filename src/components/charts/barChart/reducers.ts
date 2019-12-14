import { SET_MAX_Y } from "./maxYSetter/actions";
import { IBarChartsState } from "../../../types";
import { updateBarChartMaxY } from "./utils";

const defaultState: IBarChartsState = {
  byId: {
    chart1: {
      maxY: 20
    }
  }
};

export const barChartReducer = (
  state: IBarChartsState = defaultState,
  action: { type: string; barChartId: string; maxY: number }
): IBarChartsState => {
  switch (action.type) {
    case SET_MAX_Y:
      const { barChartId, maxY } = action;

      return { ...state, ...updateBarChartMaxY(state, barChartId, maxY) };
    default:
      return state;
  }
};
