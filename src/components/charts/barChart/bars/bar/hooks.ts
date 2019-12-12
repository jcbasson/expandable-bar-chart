import { useEffect, useRef } from "react";
import _ from "lodash";
import { restrictNumberToRange } from "../../../../../utils/numberUtils";

//TODO: Get type for "bar"
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
  const yAxisMonitorRef = useRef();

  useEffect(() => {
    const resizeButtonElement = _.get(resizeButtonRef, "current");
    //@ts-ignore
    const barElement = barRef.current;
    const yAxisMonitorElement = yAxisMonitorRef.current;
    let originalMouseYCoordinate = 0;
    let originalBarHeight = 0;

    const mouseMoveHandler = (event: MouseEvent): void => {
      const barHeight =
        originalBarHeight - (event.pageY - originalMouseYCoordinate);
      const restrictedBarHeight = restrictNumberToRange(
        0,
        maxYValue * 20,
        barHeight
      );

      barElement.style.border = `${
        restrictedBarHeight <= 0 ? "none" : "1px solid #000"
      }`;
      barElement.style.height = `${restrictedBarHeight}px`;
    };

    const mouseUpHandler = (): void => {
      //@ts-ignore
      yAxisMonitorElement.style.display = "none";
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };

    const mouseDownHandler = (event: MouseEvent): void => {
      //@ts-ignore
      yAxisMonitorElement.style.display = "inline-block";
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

  return [resizeButtonRef, yAxisMonitorRef];
};
