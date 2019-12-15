export interface IGlobalWarmingState {
  co2Level: number;
  oceanLevel: number;
  temperatureLevel: number;
  governmentEffortLevels: number;
}

export interface IState {
  globalWarming: IGlobalWarmingState;
}
