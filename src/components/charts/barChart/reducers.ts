import { SET_MAX_Y } from "./maxYSetter/actions";
import { IBarChartsState } from "../../../types";

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
      console.log("state = ", state);
      console.log("action = ", action);
      // byId:chart1: {maxY: 20
      return { ...state };
    default:
      return state;
  }
};
