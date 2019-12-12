import { useEffect, useRef } from "react";
import _ from "lodash";
import { calculateBarYValue } from "./utils";

export const useVerticalResizeHandler = ({
  barId,
  barRef,
  maxYValue
}: {
  barId: string;
  barRef: React.MutableRefObject<HTMLDivElement>;
  maxYValue: number;
}) => {
  const resizeButtonRef = useRef();

  useEffect(() => {
    const resizeButtonElement = _.get(resizeButtonRef, "current");
    //@ts-ignore
    const barElement = barRef.current;

    let originalMouseYCoordinate = 0;
    let originalBarHeight = 0;

    const mouseMoveHandler = (event: MouseEvent): void => {
      const makeBarHeight = calculateBarYValue(maxYValue, 20);
      const barHeight = makeBarHeight(
        originalBarHeight,
        originalMouseYCoordinate,
        event.pageY
      );

      barElement.style.border = `${barHeight <= 0 ? "none" : "1px solid #000"}`;
      barElement.style.height = `${barHeight}px`;
    };

    const mouseUpHandler = (): void => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };

    const mouseDownHandler = (event: MouseEvent): void => {
      originalBarHeight = parseFloat(
        getComputedStyle(barElement, null)
          .getPropertyValue("height")
          .replace("px", "")
      );

      originalMouseYCoordinate = event.pageY;

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
        resizeButtonElement.removeEventListener("mousedown");
      }

      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [resizeButtonRef.current]);

  return [resizeButtonRef];
};
