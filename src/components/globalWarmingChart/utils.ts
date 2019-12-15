import { createSelector } from "reselect";
import _ from "lodash";
import { Dispatch } from "redux";
import {
  GetGlobalWarmingLevels,
  GenerateGlobalWarmingBarsData,
  GetGlobalWarmingBarData,
  GetGlobalWarmingLevelBarName,
  GlobalWarmingBarNames,
  GetGlobalWarmingLevelBarColor,
  GetGlobalWarmingLevelChangeHandler
} from "./types";
import {
  setCO2Levels,
  setOceanLevels,
  setTemperatureLevels,
  setGovernmentEffortLevels
} from "./actions";

const getGlobalWarmingLevels: GetGlobalWarmingLevels = state => {
  return state.globalWarming;
};

const getGlobalWarmingLevelBarName: GetGlobalWarmingLevelBarName = levelName => {
  const barNames = {
    co2Level: GlobalWarmingBarNames.co2Level,
    oceanLevel: GlobalWarmingBarNames.oceanLevel,
    temperatureLevel: GlobalWarmingBarNames.temperatureLevel,
    governmentEffortLevels: GlobalWarmingBarNames.governmentEffortLevels
  };

  return _.get(barNames, levelName, "");
};

const getGlobalWarmingLevelBarColor: GetGlobalWarmingLevelBarColor = levelName => {
  const barColors = {
    co2Level: "#3798D5",
    oceanLevel: "#90EE90",
    temperatureLevel: "#FEE4C3",
    governmentEffortLevels: "#f54275"
  };
  return _.get(barColors, levelName, "#000");
};

const getGlobalWarmingLevelChangeHandler: GetGlobalWarmingLevelChangeHandler = levelName => {
  const changeHandlers = {
    co2Level: setCO2Levels,
    oceanLevel: setOceanLevels,
    temperatureLevel: setTemperatureLevels,
    governmentEffortLevels: setGovernmentEffortLevels
  };
  return _.get(changeHandlers, levelName, "#000");
};

const getGlobalWarmingBarData: GetGlobalWarmingBarData = (
  globalWarmingLevels,
  dispatch
) => globalWarmingLevelName => {
  return {
    barName: getGlobalWarmingLevelBarName(globalWarmingLevelName),
    yValue: _.get(globalWarmingLevels, globalWarmingLevelName, 0),
    color: getGlobalWarmingLevelBarColor(globalWarmingLevelName),
    onYValueChange: (level: number) =>
      dispatch(
        getGlobalWarmingLevelChangeHandler(globalWarmingLevelName)(level)
      )
  };
};

const generateGlobalWarmingBarData: GenerateGlobalWarmingBarsData = dispatch => globalWarmingLevels => {
  return Object.keys(globalWarmingLevels).map(
    getGlobalWarmingBarData(globalWarmingLevels, dispatch)
  );
};

export const makeGetGlobalWarmingBarData = (dispatch: Dispatch) =>
  createSelector(
    getGlobalWarmingLevels,
    generateGlobalWarmingBarData(dispatch)
  );
