import * as React from "react";
import styled from "styled-components";
import { YAxis } from "./yAxis";
import { XAxis } from "./xAxis";

export const BarChart: React.FC = () => {
  return (
    <Chart>
      <YAxis height={400} maxValue={20} valueIncrements={5}></YAxis>
      <XAxis height={400} maxValue={20} valueIncrements={5}></XAxis>
    </Chart>
  );
};

const Chart = styled.div`
  background-color: #f1f2f4;
  width: 500px;
  height: 450px;
  position: relative;
  padding-top: 10px;
`;
