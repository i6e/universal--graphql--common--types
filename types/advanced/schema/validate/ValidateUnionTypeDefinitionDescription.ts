import { Values } from "@icehouse/universal--util--typescript--types";
import { ObjectTypeDefinitionDescription } from "../ObjectTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { UnionTypeDefinitionDescription } from "../UnionTypeDefinitionDescription";
import { ValidateForUnknownFields } from "./util/ValidateForUnknownFields";

export type ValidateUnionTypeDefinitionDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TType extends UnionTypeDefinitionDescription
> =
  | ValidateForUnknownFields<
      TDebugPath,
      TType,
      keyof UnionTypeDefinitionDescription
    >
  | Values<{
      [K in TType["variants"]]: K extends keyof TSchema["types"]
        ? TSchema["types"][K] extends ObjectTypeDefinitionDescription
          ? never
          : `${TDebugPath}.variants: Union variant (${K} must be objet type)`
        : `${TDebugPath}.variants: No such type: ${K}`;
    }>;
