import { ArrayDescription } from "../ArrayDescription";
import { EnumTypeDefinitionDescription } from "../EnumTypeDefinitionDescription";
import { InterfaceTypeDefinitionDescription } from "../InterfaceTypeDefinitionDescription";
import { ObjectTypeDefinitionDescription } from "../ObjectTypeDefinitionDescription";
import { ScalarTypeDefinitionDescription } from "../ScalarTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { TerminalDescription } from "../TerminalDescription";
import { UnionTypeDefinitionDescription } from "../UnionTypeDefinitionDescription";
import { ValidateForUnknownFields } from "./util/ValidateForUnknownFields";
import { ValidateBuiltinType } from "./ValidateBuiltinType";

export type ValidateOutputTypeDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TType
> = TType extends ArrayDescription
  ? ValidateOutputArrayTypeDescription<TSchema, TDebugPath, TType>
  : TType extends TerminalDescription
  ? ValidateOutputTerminalTypeDescription<TSchema, TDebugPath, TType>
  : `${TDebugPath}: An output type must be one of array/terminal`;

type ValidateOutputArrayTypeDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TType extends ArrayDescription
> =
  | ValidateForUnknownFields<TDebugPath, TType, keyof ArrayDescription>
  | ValidateOutputTypeDescription<
      TSchema,
      `${TDebugPath}[]`,
      TType["elementType"]
    >;

type ValidateOutputTerminalTypeDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TType extends TerminalDescription
> =
  | ValidateForUnknownFields<TDebugPath, TType, keyof TerminalDescription>
  | (TType["typeName"] extends keyof TSchema["types"]
      ? TSchema["types"][TType["typeName"]] extends
          | InterfaceTypeDefinitionDescription
          | ObjectTypeDefinitionDescription
          | UnionTypeDefinitionDescription
          | EnumTypeDefinitionDescription
          | ScalarTypeDefinitionDescription
        ? never
        : `${TDebugPath}: A type or field of output type must be one of interface/object/union/enum/scalar)`
      : ValidateBuiltinType<TDebugPath, TType["typeName"]>);
