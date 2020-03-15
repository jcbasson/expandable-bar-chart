import styled from "styled-components";
import { IBars } from "./types";

export const StyledBars = styled.div<Pick<IBars, "yAxisHeight">>`
  height: ${({ yAxisHeight }) => yAxisHeight}px;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 200;
  position: relative;
  top: 0;
  right: 0;
  float: right;
`;
