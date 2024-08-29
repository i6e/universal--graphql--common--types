import { InterfaceTypeDefinitionDescription } from "../InterfaceTypeDefinitionDescription";
import { ObjectTypeDefinitionDescription } from "../ObjectTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { MergeValidationResults } from "./util/MergeValidationResults";
import { ValidateObjectTypeFieldDescription } from "./ValidateObjectTypeFieldDescription";

export type ValidateObjectTypeTypeDefinitionDescription<
  TSchema extends SchemaDefinitionDescription,
  TTypeName extends Extract<keyof TSchema["types"], string>
> = TSchema["types"][TTypeName] extends ObjectTypeDefinitionDescription
  ? TSchema["types"][TTypeName]["name"] extends TTypeName
    ? MergeValidationResults<

          | {
              [K in Extract<
                keyof TSchema["types"][TTypeName]["fields"],
                string
              >]-?: ValidateObjectTypeFieldDescription<
                TSchema,
                TSchema["types"][TTypeName],
                K
              >;
            }[Extract<keyof TSchema["types"][TTypeName]["fields"], string>]
          | TSchema["types"][TTypeName]["implements"][number] extends infer I extends string
          ? I extends keyof TSchema["types"]
            ? TSchema["types"][I] extends InterfaceTypeDefinitionDescription
              ? never
              : {
                  success: false;
                  messages: [`${I} is not a interface type`];
                }
            : {
                success: false;
                messages: [`${I} is not a type`];
              }
          : never
      >
    : {
        success: false;
        messages: [
          `schema.types.${TTypeName}.name is not match with ${TTypeName}`
        ];
      }
  : {
      success: false;
      messages: [
        `schema.types.${TTypeName} is not valid ObjectTypeDefinitionDescription`
      ];
    };
