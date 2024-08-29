import { And, UnionAny } from "@icehouse/universal--util--typescript--types";
import { ValidationResult } from "./ValidationResult";

type MergeTwoValidationResult<
  T1 extends ValidationResult,
  T2 extends ValidationResult
> = {
  success: And<T1["success"], T2["success"], true, false>;
  messages: [...T1["messages"], ...T2["messages"]];
};

type MergeValidationResultsInternal<
  T extends ValidationResult,
  U extends ValidationResult
> = UnionAny<T> extends infer I extends ValidationResult
  ? [I] extends [never]
    ? U
    : MergeValidationResultsInternal<
        Exclude<T, I>,
        MergeTwoValidationResult<U, I>
      >
  : never;

export type MergeValidationResults<T extends ValidationResult> =
  MergeValidationResultsInternal<T, { success: true; messages: [] }>;
