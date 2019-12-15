import React from "react";
import { IBarChartSettingsContext } from "./types";

export const BarChartSettingsContext = React.createContext({
  maxYValue: 20,
  yAxisHeight: 400,
  yAxisUnitPixels: 20
} as IBarChartSettingsContext);
