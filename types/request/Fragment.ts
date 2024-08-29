import { Field } from "./Field";
import { FragmentSpread } from "./FragmentSpread";
import { InlineFragment } from "./InlineFragment";

export interface Fragment {
  name: string;
  fields: Record<string, Field>;
  fragmentSpreads: FragmentSpread[];
  inlineFragments: InlineFragment[];
}
