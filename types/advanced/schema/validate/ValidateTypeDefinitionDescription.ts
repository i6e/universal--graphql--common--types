import { EnumTypeDefinitionDescription } from "../EnumTypeDefinitionDescription";
import { InputTypeDefinitionDescription } from "../InputTypeDefinitionDescription";
import { InterfaceTypeDefinitionDescription } from "../InterfaceTypeDefinitionDescription";
import { ObjectTypeDefinitionDescription } from "../ObjectTypeDefinitionDescription";
import { ScalarTypeDefinitionDescription } from "../ScalarTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { UnionTypeDefinitionDescription } from "../UnionTypeDefinitionDescription";
import { ValidateInterfaceTypeDefinitionDescription } from "./ValidateInterfaceTypeDefinitionDescription";
import { ValidateObjectTypeDefinitionDescription } from "./ValidateObjectTypeDefinitionDescription";
import { ValidateUnionTypeDefinitionDescription } from "./ValidateUnionTypeDefinitionDescription";

export type ValidateTypeDefinitionDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TType
> = TType extends InterfaceTypeDefinitionDescription
  ? ValidateInterfaceTypeDefinitionDescription<TSchema, TDebugPath, TType>
  : TType extends ObjectTypeDefinitionDescription
  ? ValidateObjectTypeDefinitionDescription<TSchema, TDebugPath, TType>
  : TType extends UnionTypeDefinitionDescription
  ? ValidateUnionTypeDefinitionDescription<TSchema, TDebugPath, TType>
  : TType extends EnumTypeDefinitionDescription
  ? ValidateEnumTypeDefinitionDescription<TSchema, TDebugPath, TType>
  : TType extends InputTypeDefinitionDescription
  ? ValidateInputTypeDefinitionDescription<TSchema, TDebugPath, TType>
  : TType extends ScalarTypeDefinitionDescription
  ? ValidateScalarTypeDefinitionDescription<TSchema, TDebugPath, TType>
  : `${TDebugPath}: A type must be one of interface/object/union/enum/input/scalar`;
