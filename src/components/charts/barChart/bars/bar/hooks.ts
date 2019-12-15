import { useEffect, useRef } from "react";
import _ from "lodash";
import { setBar, getBarHeight, calculateCurrentYValue } from "./utils";
import { UseVerticalResizeHandler } from "./types";
import { hideElements } from "../../../../../utils/dom/domUtils";

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
    const barTrackerValueElement = document.querySelector(
      ".bar-tracker-value"
    ) as HTMLElement;
    let previousMouseYCoordinate = 0;
    let originalBarHeight = 0;

    const mouseMoveHandler = (event: MouseEvent): void => {
      setBar({
        maxYValue,
        originalBarHeight,
        previousMouseYCoordinate,
        newMouseYCoordinate: event.pageY,
        barElement,
        barTrackerLineElement,
        barTrackerValueElement,
        yAxisUnitPixels
      });
    };

    const mouseUpHandler = (): void => {
      hideElements([barTrackerLineElement, barTrackerValueElement]);
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
      const barHeight = getBarHeight(barElement);
      onYValueChange(calculateCurrentYValue(barHeight, yAxisUnitPixels));
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
