import { Value } from "../request/Value";
import { Type } from "./Type";

export interface ArgumentDefinition {
  name: string;
  type: Type;
  defaultValue?: Value;
}
