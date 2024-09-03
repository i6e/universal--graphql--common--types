import { Values } from "@icehouse/universal--util--typescript--types";
import { InterfaceTypeDefinitionDescription } from "../InterfaceTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { ValidateForUnknownFields } from "./util/ValidateForUnknownFields";
import { ValidateNonUnion } from "./util/ValidateNonUnion";
import { ValidateObjectTypeFieldDescription } from "./ValidateObjectTypeFieldDescription";

export type ValidateInterfaceTypeDefinitionDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TType extends InterfaceTypeDefinitionDescription
> =
  | ValidateForUnknownFields<
      TDebugPath,
      TType,
      keyof InterfaceTypeDefinitionDescription
    >
  | ValidateNonUnion<TDebugPath, TType, "Type(internal)">
  | Values<{
      [K in Extract<
        keyof TType["fields"],
        string
      >]: ValidateObjectTypeFieldDescription<
        TSchema,
        `${TDebugPath}.fields.${K}`,
        TType["fields"][K]
      >;
    }>;
