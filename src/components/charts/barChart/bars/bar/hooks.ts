import { useEffect, useRef } from "react";
import _ from "lodash";
import {
  setBarHeight,
  setBarTracker,
  getBarHeight,
  calculateCurrentYValue
} from "./utils";
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
    const resizeButtonElement = _.get(resizeButtonRef, "current");
    //@ts-ignore
    const barElement = barRef.current as HTMLElement;
    /*Accessing the DOM directly because I did not want to prop drill a ref for this
      And the react context does not allow me use this hook in it's callback
    */
    const barTrackerLineElement = document.querySelector(
      ".bar-tracker-line"
    ) as HTMLElement;
    const barTrackerValueElement = document.querySelector(
      ".bar-tracker-value"
    ) as HTMLElement;
    let previousMouseYCoordinate = 0;
    let originalBarHeight = 0;
    let mouseMoveCallbackTimeoutID = 0;

    const mouseMoveHandler = (event: MouseEvent): void => {
      clearTimeout(mouseMoveCallbackTimeoutID);
      mouseMoveCallbackTimeoutID = setTimeout(() => {
        setBarHeight({
          yAxisHeight,
          originalBarHeight,
          previousMouseYCoordinate,
          newMouseYCoordinate: event.pageY,
          barElement,
          yAxisUnitPixels
        });

        setBarTracker({
          barElement,
          yAxisHeight,
          yAxisUnitPixels,
          barTrackerLineElement,
          barTrackerValueElement
        });
      }, 0);
    };

    const mouseUpHandler = (): void => {
      onYValueChange(
        calculateCurrentYValue(getBarHeight(barElement), yAxisUnitPixels)
      );
      hideElements([barTrackerLineElement, barTrackerValueElement]);
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
