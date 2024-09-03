import { Values } from "@icehouse/universal--util--typescript--types";
import { InterfaceTypeDefinitionDescription } from "../InterfaceTypeDefinitionDescription";
import { ObjectTypeDefinitionDescription } from "../ObjectTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { ValidateForUnknownFields } from "./util/ValidateForUnknownFields";
import { ValidateObjectTypeFieldDescription } from "./ValidateObjectTypeFieldDescription";

export type ValidateObjectTypeDefinitionDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TType extends ObjectTypeDefinitionDescription
> =
  | ValidateForUnknownFields<
      TDebugPath,
      TType,
      keyof ObjectTypeDefinitionDescription
    >
  | (TType["implements"] extends keyof TSchema["types"]
      ? TSchema["types"][TType["implements"]] extends InterfaceTypeDefinitionDescription
        ? never
        : `${TDebugPath}.implements: Type to implement (${TType["implements"]} must be interface type)`
      : never)
  | Values<{
      [K in Extract<
        keyof TType["fields"],
        string
      >]-?: ValidateObjectTypeFieldDescription<
        TSchema,
        `${TDebugPath}.fields.${K}`,
        TType["fields"][K]
      >;
    }>;
