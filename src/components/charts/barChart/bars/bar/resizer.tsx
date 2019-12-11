import React from "react";
import styled from "styled-components";
import _ from "lodash";

export interface IResizer {}

export const Resizer: React.FC<IResizer> = ({}) => {
  return (
    <ResizerContainer>
      <YAxisMonitor></YAxisMonitor>
      <ResizerButton></ResizerButton>
    </ResizerContainer>
  );
};

const ResizerContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
`;

const YAxisMonitor = styled.div`
  border: 1px dashed #000;
  align-self: start;
  width: 450px;
  left: -27%;
  top: -1px;
  position: absolute;
`;

const ResizerButton = styled.span`
  width: 14px;
  height: 14px;
  background: white;
  border: 1px solid #000;
  position: relative;
  top: -7px;
  cursor: ns-resize;
`;
