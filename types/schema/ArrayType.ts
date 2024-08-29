import { Type } from "./Type";

export interface ArrayType {
  type: "array";
  isArrayRequired: boolean;
  isElementRequired: boolean;
  elementType: Type;
}
