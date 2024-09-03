export type ValidateStringLiteral<
  TDebugPath extends string,
  TType extends string,
  TMessage extends string = "It"
> = string extends TType
  ? `${TDebugPath}: ${TMessage} must be string literal type`
  : never;
