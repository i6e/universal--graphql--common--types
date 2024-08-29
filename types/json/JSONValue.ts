import { JSONObject } from "./JSONObject";
import { JSONPrimitive } from "./JSONPrimitive";

export type JSONValue = JSONValue[] | JSONObject | JSONPrimitive;
