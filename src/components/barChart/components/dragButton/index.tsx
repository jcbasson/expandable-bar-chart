import React from "react";
import styled from "styled-components";

export const DragButton: React.FC = () => {
  return (
    <>
      <Button className="DragButton"></Button>
    </>
  );
};

const Button = styled.div`
  height: 8px;
  width: 8px;
  background-color: #fff;
  border: 1px solid #000;
`;
