import { ChangeEvent } from "react";

export interface IMaxYSetter {
  readonly maxY: string;
  readonly setMaxYHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
