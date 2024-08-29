import { TypeDescription } from "./TypeDescription";

export interface ArrayDescription {
  type: "array";
  isArrayRequired: boolean;
  isElementRequired: boolean;
  elementType: TypeDescription;
}
