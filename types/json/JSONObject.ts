import { JSONValue } from "./JSONValue";

export interface JSONObject {
  [_: string]: JSONValue;
}
