import {
  StringUnionToString,
  UnionToIntersection,
} from "@icehouse/universal--util--typescript--types";
import { RequestType } from "../../../request/RequestType";
import { ObjectTypeDefinitionDescription } from "../ObjectTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { MergeValidationResults } from "./util/MergeValidationResults";
import { ValidateTypeDefinitionDescription } from "./ValidateTypeDefinitionDescription";

export type ValidateSchemaDefinitionDescription<
  TSchema extends SchemaDefinitionDescription
> = MergeValidationResults<
  | ValidateSchemaDefinitionDescriptionMain<TSchema, "query">
  | ValidateSchemaDefinitionDescriptionMain<TSchema, "mutation">
  | {
      [K in keyof TSchema["types"]]-?: K extends string
        ? ValidateTypeDefinitionDescription<TSchema, K>
        : never;
    }[keyof TSchema["types"]]
>;

type ValidateSchemaDefinitionDescriptionMain<
  TSchema extends SchemaDefinitionDescription,
  TRequestType extends RequestType
> = [UnionToIntersection<TSchema[TRequestType]>] extends [never]
  ? {
      success: false;
      messages: [
        `SchemaDefinitionDescription#${TRequestType} must not be a union type: ${StringUnionToString<
          TSchema[TRequestType]
        >}`
      ];
    }
  : TSchema[TRequestType] extends keyof TSchema["types"]
  ? TSchema["types"][TSchema[TRequestType]] extends ObjectTypeDefinitionDescription
    ? { success: true; messages: [] }
    : {
        success: false;
        messages: [
          `${TRequestType} type(${TSchema[TRequestType]}) is not an object type`
        ];
      }
  : {
      success: false;
      messages: [`No such type: ${TSchema[TRequestType]}`];
    };
