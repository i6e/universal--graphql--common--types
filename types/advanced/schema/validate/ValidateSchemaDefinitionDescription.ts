import { Values } from "@icehouse/universal--util--typescript--types";
import { ObjectTypeDefinitionDescription } from "../ObjectTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { ValidateTypeDefinitionDescription } from "./ValidateTypeDefinitionDescription";
import { ValidateForUnknownFields } from "./util/ValidateForUnknownFields";

export type ValidateSchemaDefinitionDescription<
  TSchema extends SchemaDefinitionDescription
> =
  | ValidateForUnknownFields<
      "schema",
      TSchema,
      keyof SchemaDefinitionDescription
    >
  | (TSchema["query"] extends keyof TSchema["types"]
      ? TSchema["types"][TSchema["query"]] extends ObjectTypeDefinitionDescription
        ? never
        : `schema.query: Query type (${TSchema["query"]} must be objet type)`
      : never)
  | (TSchema["mutation"] extends keyof TSchema["types"]
      ? TSchema["types"][TSchema["mutation"]] extends ObjectTypeDefinitionDescription
        ? never
        : `schema.mutation: Mutation type (${TSchema["mutation"]} must be objet type)`
      : never)
  | Values<{
      [K in Extract<
        keyof TSchema["types"],
        string
      >]-?: ValidateTypeDefinitionDescription<
        TSchema,
        `schema.types.${K}`,
        TSchema["types"][K]
      >;
    }>;
