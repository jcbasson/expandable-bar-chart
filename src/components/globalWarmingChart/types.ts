import { IState, IGlobalWarmingState } from "../../types";
import { IBarData } from "../charts/barChart/bars/types";
import { Dispatch } from "redux";

export type SetLevel = (level: number) => { type: string; level: number };

export type GetGlobalWarmingLevels = (state: IState) => IGlobalWarmingState;

export type GenerateGlobalWarmingBarsData = (
  dispatch: Dispatch
) => (globalWarmingLevels: IGlobalWarmingState) => IBarData[];

export type GetGlobalWarmingBarData = (
  globalWarmingLevels: IGlobalWarmingState,
  dispatch: Dispatch
) => (globalWarmingLevelName: string) => IBarData;

export enum GlobalWarmingBarNames {
  co2Level = "CO2",
  oceanLevel = "Ocean",
  temperatureLevel = "Temp.",
  governmentEffortLevels = "Gov Effort"
}

export type GetGlobalWarmingLevelBarColor = (levelName: string) => string;

export type GetGlobalWarmingLevelBarName = (levelName: string) => string;

export type GetGlobalWarmingLevelChangeHandler = (
  levelName: string
) => Function;
