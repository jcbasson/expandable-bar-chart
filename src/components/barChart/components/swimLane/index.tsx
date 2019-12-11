import React, { useState, useEffect, useRef } from "react";
import { Bar } from "../bar";
import styled from "styled-components";
import _ from "lodash";

interface ISwimLane {
  readonly barYCoordinate: number;
}

export const SwimLane: React.FC<ISwimLane> = ({ barYCoordinate }) => {
  const [setNode, barY] = useBarModifier({ barYCoordinate });

  return (
    <StyledBar ref={setNode}>
      <Bar yCoord={barY}></Bar>
    </StyledBar>
  );
};

export const useBarModifier = ({ barYCoordinate }: any) => {
  const [barY, setBarYCoordinate] = useState(barYCoordinate);
  const [node, setNode] = useState(null);

  useEffect(() => {
    let flag = false;

    if (node) {
      node.onmousedown = (event: MouseEvent) => {
        // @ts-ignore
        const rect = event.target.getBoundingClientRect();
        const y = event.clientY - rect.top;
        console.log("y = ", event);
        const targetClassName = _.get(event, "target.className", "");
        if (targetClassName.includes("DragButton")) {
          flag = true;
        }
      };

      node.onmouseup = (event: MouseEvent) => {
        const targetClassName = _.get(event, "target.className", "");
        if (targetClassName.includes("DragButton")) {
          flag = false;
        }
      };

      node.onmousemove = (event: MouseEvent) => {
        if (flag) {
          // @ts-ignore
          const rect = event.target.getBoundingClientRect();
          var x = event.clientX - rect.left; //x position within the element.
          var y = event.clientY - rect.top; //y position within the element.
          setBarYCoordinate(y);
        }
      };
    }

    return () => {
      if (node) {
        node.onmousedown = null;
        node.onmouseup = null;
        node.onmousemove = null;
      }
    };
  }, [node]);

  return [setNode, barY];
};

const StyledBar = styled.div`
  grid-row-end: 101;
  grid-row-start: 1;
  background-color: transparent;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(100, 1fr);
`;
