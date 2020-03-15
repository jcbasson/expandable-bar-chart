import { ChangeEvent } from "react";

export interface IMaxLevelSetter {
  readonly maxY: string;
  readonly setMaxYHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
