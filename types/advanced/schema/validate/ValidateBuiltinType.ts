export type ValidateBuiltinType<
  TDebugPath extends string,
  TTypeName extends string
> = TTypeName extends "String" | "Int" | "Float" | "Boolean" | "ID"
  ? never
  : `${TDebugPath}: No such type: ${TTypeName}`;
