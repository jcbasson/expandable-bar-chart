import { useEffect, useRef } from "react";
import get from "lodash/get";
import debounce from "lodash/debounce";
import { setBarHeight, getBarHeight, calculateCurrentYValue } from "./utils";
import { UseVerticalResizeHandler } from "./types";
import { hideElements } from "../../../../../utils/dom/domUtils";

export const useVerticalResizeHandler: UseVerticalResizeHandler = ({
  barRef,
  yAxisHeight,
  yAxisUnitPixels,
  onYValueChange
}) => {
  const resizeButtonRef = useRef();

  useEffect(() => {
    const resizeButtonElement = get(resizeButtonRef, "current") as HTMLElement;
    const barElement = get(barRef, "current") as HTMLElement;
    let previousMouseYCoordinate = 0;
    let originalBarHeight = 0;

    const updateBarChart = debounce((event: MouseEvent) => {
      setBarHeight({
        yAxisHeight,
        originalBarHeight,
        previousMouseYCoordinate,
        newMouseYCoordinate: event.pageY,
        barElement,
        yAxisUnitPixels
      });
    }, 0);

    const mouseMoveHandler = (event: MouseEvent): void => {
      updateBarChart(event);
    };

    const mouseUpHandler = (): void => {
      onYValueChange(
        calculateCurrentYValue(getBarHeight(barElement), yAxisUnitPixels)
      );
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };

    const mouseDownHandler = (event: MouseEvent): void => {
      originalBarHeight = getBarHeight(barElement);
      previousMouseYCoordinate = event.pageY;

      window.addEventListener("mousemove", mouseMoveHandler);
      window.addEventListener("mouseup", mouseUpHandler);
    };

    // @ts-ignore
    resizeButtonElement.addEventListener("mousedown", mouseDownHandler);
    return () => {
      // @ts-ignore
      resizeButtonElement.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [barRef.current, yAxisHeight, yAxisUnitPixels]);

  return [resizeButtonRef];
};
