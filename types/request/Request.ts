import { Field } from "./Field";
import { Fragment } from "./Fragment";
import { FragmentSpread } from "./FragmentSpread";
import { InlineFragment } from "./InlineFragment";
import { RequestArgumentDefinition } from "./RequestArgumentDefinition";
import { RequestType } from "./RequestType";

export interface Request {
  type: RequestType;
  fields: Record<string, Field>;
  fragmentSpreads: FragmentSpread[];
  inlineFragments: InlineFragment[];
  fragments: Record<string, Fragment>;
  arguments?: Record<string, RequestArgumentDefinition>;
}
