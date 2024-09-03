import { ValidateNonUnion } from "./util/ValidateNonUnion";
import { ValidateStringLiteral } from "./util/ValidateStringLiteral";

export type ValidateBuiltinType<
  TDebugPath extends string,
  TTypeName extends string
> =
  | ValidateStringLiteral<TDebugPath, TTypeName, "Type name">
  | ValidateNonUnion<TDebugPath, TTypeName, "Type name">
  | (TTypeName extends "String" | "Int" | "Float" | "Boolean" | "ID"
      ? never
      : `${TDebugPath}: No such type: ${TTypeName}`);
