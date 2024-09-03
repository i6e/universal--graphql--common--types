import { Values } from "@icehouse/universal--util--typescript--types";
import { ValidateIdentifiers } from "../../common/validate/ValidateIdentifiers";
import { InterfaceTypeDefinitionDescription } from "../InterfaceTypeDefinitionDescription";
import { ObjectTypeDefinitionDescription } from "../ObjectTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { ValidateForUnknownFields } from "./util/ValidateForUnknownFields";
import { ValidateNonUnion } from "./util/ValidateNonUnion";
import { ValidateStringLiteral } from "./util/ValidateStringLiteral";
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
  | ValidateNonUnion<TDebugPath, TType, "Type(internal)">
  | ValidateStringLiteral<
      `${TDebugPath}.implements`,
      TType["implements"],
      "Types to implement"
    >
  | ValidateIdentifiers<
      `${TDebugPath}.fields`,
      Extract<keyof TType["fields"], string>
    >
  | (TType["implements"] extends infer I extends string
      ? I extends keyof TSchema["types"]
        ? TSchema["types"][I] extends InterfaceTypeDefinitionDescription
          ? never
          : `${TDebugPath}.implements: Type to implement (${I}) must be interface type`
        : `${TDebugPath}.implements: No such type: ${I}`
      : never)
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
