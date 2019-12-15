import { useEffect, useRef } from "react";
import _ from "lodash";
import { setBarHeight, getBarHeight, calculateCurrentYValue } from "./utils";
import { UseVerticalResizeHandler } from "./types";

export const useVerticalResizeHandler: UseVerticalResizeHandler = ({
  barRef,
  maxYValue,
  yAxisUnitPixels,
  onYValueChange
}) => {
  const resizeButtonRef = useRef();

  useEffect(() => {
    const resizeButtonElement = _.get(resizeButtonRef, "current");
    //@ts-ignore
    const barElement = barRef.current;
    //Accessing the DOM directly because I did not want to prop drill a ref for this
    const barTrackerLineElement = document.querySelector(
      ".bar-tracker-line"
    ) as HTMLElement;
    let previousMouseYCoordinate = 0;
    let originalBarHeight = 0;

    const mouseMoveHandler = (event: MouseEvent): void => {
      setBarHeight({
        maxYValue,
        originalBarHeight,
        previousMouseYCoordinate,
        newMouseYCoordinate: event.pageY,
        barElement,
        barTrackerLineElement,
        yAxisUnitPixels
      });
    };

    const mouseUpHandler = (): void => {
      barTrackerLineElement.style.display = "none";
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
      onYValueChange(calculateCurrentYValue(barElement, yAxisUnitPixels));
    };

    const mouseDownHandler = (event: MouseEvent): void => {
      originalBarHeight = getBarHeight(barElement);
      previousMouseYCoordinate = event.pageY;

      window.addEventListener("mousemove", mouseMoveHandler);
      window.addEventListener("mouseup", mouseUpHandler);
    };

    if (resizeButtonElement) {
      //TODO: Look into a typescript strict null/undefined check set false not working as should
      // @ts-ignore
      resizeButtonElement.addEventListener("mousedown", mouseDownHandler);
    }
    return () => {
      if (resizeButtonElement) {
        ///TODO: Look into a typescript strict null/undefined check set false not working as should
        // @ts-ignore
        resizeButtonElement.removeEventListener("mousedown", mouseDownHandler);
      }

      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [maxYValue, yAxisUnitPixels]);

  return [resizeButtonRef];
};
