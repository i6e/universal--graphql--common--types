import { JSONValue } from "../json/JSONValue";

export interface Literal {
  type: "literal";
  value: JSONValue;
}
