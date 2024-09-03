import { StringUnionToString } from "@icehouse/universal--util--typescript--types";

export type ValidateForUnknownFields<
  TDebugPath extends string,
  TObject,
  TAllowedKeys extends string
> = [
  keyof TObject extends infer I extends string
    ? I extends TAllowedKeys
      ? never
      : I
    : never
] extends [never]
  ? never
  :
      | `${TDebugPath}: Unknown fields: ${StringUnionToString<
          keyof TObject extends infer I extends string
            ? I extends TAllowedKeys
              ? never
              : I
            : never
        >}`;
