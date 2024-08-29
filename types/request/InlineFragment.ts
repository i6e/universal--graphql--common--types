import { Field } from "./Field";
import { FragmentSpread } from "./FragmentSpread";

export interface InlineFragment {
  type: "inlineFragment";
  onType: string;
  fields: Record<string, Field>;
  fragmentSpreads: FragmentSpread[];
  inlineFragments: InlineFragment[];
}
