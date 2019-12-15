import {
  SET_C02_LEVELS,
  SET_OCEAN_LEVELS,
  SET_TEMPERATURE_LEVELS,
  SET_GOVERNMENT_EFFORT_LEVELS
} from "./actions";
import { IGlobalWarmingState } from "../../types";

const defaultState: IGlobalWarmingState = {
  co2Level: 10,
  oceanLevel: 5,
  temperatureLevel: 20,
  governmentEffortLevels: 0
};

export const globalWarmingReducer = (
  state: IGlobalWarmingState = defaultState,
  action: { type: string; level: number }
): IGlobalWarmingState => {
  switch (action.type) {
    case SET_C02_LEVELS:
      const { level: co2Level } = action;

      return { ...state, co2Level };
    case SET_OCEAN_LEVELS:
      const { level: oceanLevel } = action;

      return { ...state, oceanLevel };
    case SET_TEMPERATURE_LEVELS:
      const { level: temperatureLevel } = action;

      return { ...state, temperatureLevel };
    case SET_GOVERNMENT_EFFORT_LEVELS:
      const { level: governmentEffortLevels } = action;
      return { ...state, governmentEffortLevels };
    default:
      return state;
  }
};
