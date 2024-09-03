import { TypeDescription } from "./TypeDescription";

export interface ArrayDescription {
  type: "array";
  isArrayRequired: boolean;
  elementType: TypeDescription;
}
