import { HideElements, SetElementsDisplay } from "./types";

export const hideElements: HideElements = elements => {
  elements.map(element => (element.style.display = "none"));
};

export const setElementsDisplay: SetElementsDisplay = (elements, display) => {
  elements.map(element => (element.style.display = display));
};
