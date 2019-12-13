import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { YAxis } from "./yAxis";
import { XAxis } from "./xAxis";
import { Bars } from "./bars";
import { IBarChart } from "./types";
import { MaxYSetter } from "./maxYSetter";
import { IState } from "../../../types";
import { makeGetBarChartMaxY } from "./utils";

export const BarChart: React.FC<IBarChart> = ({ id, height, width }) => {
  const maxY = useSelector((state: IState): number => {
    return makeGetBarChartMaxY()(state, id);
  });

  return (
    <BarChartContainer>
      <MaxYSetter barChartId={id} maxY={maxY}></MaxYSetter>
      <StyledBarChart height={height} width={width}>
        <YAxis
          maxYValue={maxY}
          yAxisHeight={height}
          yAxisDisplayValueEveryBarCount={5}
        ></YAxis>
        <XAxis yAxisHeight={height} numberOfHorizontalLines={5}></XAxis>
        <Bars
          yAxisHeight={height}
          maxYValue={maxY}
          bars={[
            {
              id: "bar1",
              yCoordinate: 10,
              color: "#3798D5",
              maxYValue: maxY,
              chartBarId: id,
              yAxisHeight: height
            },
            {
              id: "bar2",
              yCoordinate: 5,
              color: "#90EE90",
              maxYValue: maxY,
              chartBarId: id,
              yAxisHeight: height
            },
            {
              id: "bar3",
              yCoordinate: 15,
              color: "#FEE4C3",
              maxYValue: maxY,
              chartBarId: id,
              yAxisHeight: height
            },
            {
              id: "bar4",
              yCoordinate: 20,
              color: "#f54275",
              maxYValue: maxY,
              chartBarId: id,
              yAxisHeight: height
            }
          ]}
        />
      </StyledBarChart>
    </BarChartContainer>
  );
};

const BarChartContainer = styled.div`
  padding: 20px 20px 0 0;
  background-color: #f1f2f4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBarChart = styled.div<Pick<IBarChart, "height" | "width">>`
  background-color: #f1f2f4;
  width: ${({ width }) => width + 50}px;
  height: ${({ height }) => height + 50}px;
  position: relative;
`;
