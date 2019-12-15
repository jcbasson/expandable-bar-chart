import { SetLevel } from "./types";

export const SET_C02_LEVELS = "SET_C02_LEVELS";
export const SET_OCEAN_LEVELS = "SET_OCEAN_LEVELS";
export const SET_TEMPERATURE_LEVELS = "SET_TEMPERATURE_LEVELS";
export const SET_GOVERNMENT_EFFORT_LEVELS = "SET_GOVERNMENT_EFFORT_LEVELS";

export const setCO2Levels: SetLevel = level => {
  return {
    type: SET_C02_LEVELS,
    level
  };
};

export const setOceanLevels: SetLevel = level => {
  return {
    type: SET_OCEAN_LEVELS,
    level
  };
};

export const setTemperatureLevels: SetLevel = level => {
  return {
    type: SET_TEMPERATURE_LEVELS,
    level
  };
};

export const setGovernmentEffortLevels: SetLevel = level => {
  return {
    type: SET_GOVERNMENT_EFFORT_LEVELS,
    level
  };
};
