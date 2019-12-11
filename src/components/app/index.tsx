import * as React from "react";
import styled from "styled-components";
import { BarChart } from "../barChart";

export const App: React.FC = () => {
  return (
    <AppContainer>
      <BarChart></BarChart>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  height: 100vh;
  width: 100vw;
  background-color: #000;
`;
