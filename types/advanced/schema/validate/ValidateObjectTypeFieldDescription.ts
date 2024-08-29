import { IsSameType } from "@icehouse/universal--util--typescript--types";
import { ObjectTypeDefinitionDescription } from "../ObjectTypeDefinitionDescription";
import { ObjectTypeFieldDescription } from "../ObjectTypeFieldDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { MergeValidationResults } from "./util/MergeValidationResults";
import { ValidateArgumentsDescription } from "./ValidateArgumentsDescription";

export type ValidateObjectTypeFieldDescription<
  TSchema extends SchemaDefinitionDescription,
  TType extends ObjectTypeDefinitionDescription,
  TFieldName extends Extract<keyof TType["fields"], string>
> = TType["name"] extends keyof TSchema["types"]
  ? IsSameType<
      TSchema["types"][TType["name"]],
      TType,
      true,
      false
    > extends false
    ? {
        success: false;
        messages: [`Incorrect type given: ${TType["name"]}`];
      }
    : TType["fields"][TFieldName] extends ObjectTypeFieldDescription
    ? MergeValidationResults<
        | (IsSameType<
            TFieldName,
            TType["fields"][TFieldName]["name"]
          > extends false
            ? {
                success: false;
                messages: [
                  `schema.${TType["name"]}.fields.${TFieldName}.name is not match with ${TFieldName}`
                ];
              }
            : never)
        | ValidateArgumentsDescription<
            TSchema,
            TType["fields"][TFieldName]["arguments"],
            ``
          >
      >
    : {
        success: false;
        messages: [
          `schema.${TType["name"]}.fields.${TFieldName} is not valid field`
        ];
      }
  : {
      success: false;
      messages: [`Incorrect type given: ${TType["name"]}`];
    };
