import { App } from "./app";
import { globalWarmingReducer } from "./globalWarmingChart/reducers";

const reducers = {
  globalWarming: globalWarmingReducer
};
export { App, reducers };
