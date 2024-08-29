import {
  StringUnionToString,
  UnionToIntersection,
} from "@icehouse/universal--util--typescript--types";
import { InterfaceTypeDefinitionDescription } from "../InterfaceTypeDefinitionDescription";
import { ObjectTypeDefinitionDescription } from "../ObjectTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { TypeDefinitionDescription } from "../TypeDefinitionDescription";
import { MergeValidationResults } from "./util/MergeValidationResults";
import { ValidateInterfaceTypeDefinitionDescription } from "./ValidateInterfaceTypeDefinitionDescription";
import { ValidateObjectTypeTypeDefinitionDescription } from "./ValidateObjectTypeDefinitionDescription";

export type ValidateTypeDefinitionDescription<
  TSchema extends SchemaDefinitionDescription,
  TTypeName extends string
> = [UnionToIntersection<TTypeName>] extends [never]
  ? {
      success: false;
      messages: [
        `TTypeName must not be a union type: ${StringUnionToString<TTypeName>}`
      ];
    }
  : TTypeName extends Extract<keyof TSchema["types"], string>
  ? TSchema["types"][TTypeName] extends TypeDefinitionDescription
    ? MergeValidationResults<
        | (TSchema["types"][TTypeName] extends InterfaceTypeDefinitionDescription
            ? ValidateInterfaceTypeDefinitionDescription<TSchema, TTypeName>
            : never)
        | (TSchema["types"][TTypeName] extends ObjectTypeDefinitionDescription
            ? ValidateObjectTypeTypeDefinitionDescription<TSchema, TTypeName>
            : never)
        // TODO: entirely rewrite.
      >
    : {
        success: false;
        messages: [
          `schema.types.${TTypeName} is not valid TypeDefinitionDescription`
        ];
      }
  : {
      success: false;
      messages: [`${TTypeName} is not type of the schema`];
    };
