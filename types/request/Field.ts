import { Argument } from "./Argument";

export interface Field {
  type: "field";
  alias?: string;
  fieldName: string;
  arguments?: Record<string, Argument>;
}
