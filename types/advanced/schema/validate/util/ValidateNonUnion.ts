import { UnionToIntersection } from "@icehouse/universal--util--typescript--types";

export type ValidateNonUnion<
  TDebugPath extends string,
  TType,
  TMessage extends string = "It"
> = [UnionToIntersection<TType>] extends [never]
  ? `${TDebugPath}: ${TMessage} must not be union type`
  : never;
