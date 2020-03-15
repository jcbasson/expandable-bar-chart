import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { makeGetGlobalWarmingBarData } from "./utils";
import { IState } from "../../types";
import { IBarData } from "../charts/barChart/bars/types";
import BarChart from "../charts/barChart";

//Sample component to show how the bar chart might be utilized
export const GlobalWarmingChart = () => {
  const dispatch = useDispatch();
  const getGlobalWarmingBarData = makeGetGlobalWarmingBarData(dispatch);
  const barData = useSelector((state: IState): IBarData[] => {
    return getGlobalWarmingBarData(state);
  });

  return (
    <RandomInfoChartContainer>
      <Header>Global Warming Levels</Header>
      <BarChart
        maxValueAllowedForYAxisMax={100}
        defaultYAxisMax={20}
        xAxisWidth={450}
        yAxisHeight={400}
        data={barData}
        isReadOnly={false}
      ></BarChart>
    </RandomInfoChartContainer>
  );
};

const RandomInfoChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f2f4;
  padding: 10px;
`;

const Header = styled.h1`
  font-size: 20px;
`;
