import * as React from "react";
import styled from "styled-components";
import { YAxis } from "./yAxis";
import { XAxis } from "./xAxis";
import { Bars } from "./bars";

export const BarChart: React.FC = () => {
  return (
    <BarChartContainer>
      <StyledBarChart>
        <YAxis maxYValue={20} yValueIncrements={5}></YAxis>
        <XAxis maxYValue={20} yValueIncrements={5}></XAxis>
        <Bars
          maxYValue={20}
          bars={[
            { id: "bar1", yCoordinate: 10, color: "#90EE90", maxYValue: 20 },
            { id: "bar2", yCoordinate: 5, color: "#90EE90", maxYValue: 20 },
            { id: "bar3", yCoordinate: 15, color: "#90EE90", maxYValue: 20 }
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

const StyledBarChart = styled.div`
  background-color: #f1f2f4;
  width: 500px;
  height: 450px;
  position: relative;
`;
