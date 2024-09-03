import { ArrayDescription } from "../ArrayDescription";
import { EnumTypeDefinitionDescription } from "../EnumTypeDefinitionDescription";
import { InputTypeDefinitionDescription } from "../InputTypeDefinitionDescription";
import { ScalarTypeDefinitionDescription } from "../ScalarTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { TerminalDescription } from "../TerminalDescription";
import { ValidateForUnknownFields } from "./util/ValidateForUnknownFields";
import { ValidateBuiltinType } from "./ValidateBuiltinType";

export type ValidateInputTypeDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TType
> = TType extends ArrayDescription
  ? ValidateInputArrayTypeDescription<TSchema, TDebugPath, TType>
  : TType extends TerminalDescription
  ? ValidateInputTerminalTypeDescription<TSchema, TDebugPath, TType>
  : `${TDebugPath}: An input type must be one of array/terminal`;

type ValidateInputArrayTypeDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TType extends ArrayDescription
> =
  | ValidateForUnknownFields<TDebugPath, TType, keyof ArrayDescription>
  | ValidateInputTypeDescription<
      TSchema,
      `${TDebugPath}[]`,
      TType["elementType"]
    >;

type ValidateInputTerminalTypeDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TType extends TerminalDescription
> =
  | ValidateForUnknownFields<TDebugPath, TType, keyof TerminalDescription>
  | (TType["typeName"] extends keyof TSchema["types"]
      ? TSchema["types"][TType["typeName"]] extends
          | EnumTypeDefinitionDescription
          | InputTypeDefinitionDescription
          | ScalarTypeDefinitionDescription
        ? never
        : `${TDebugPath}: A type or field of input type must be one of enum/input/scalar)`
      : ValidateBuiltinType<TDebugPath, TType["typeName"]>);
