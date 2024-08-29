import { InterfaceTypeDefinitionDescription } from "../InterfaceTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { MergeValidationResults } from "./util/MergeValidationResults";
import { ValidateInterfaceTypeFieldDescription } from "./ValidateInterfaceTypeFieldDescription";

export type ValidateInterfaceTypeDefinitionDescription<
  TSchema extends SchemaDefinitionDescription,
  TTypeName extends Extract<keyof TSchema["types"], string>
> = TSchema["types"][TTypeName] extends InterfaceTypeDefinitionDescription
  ? TSchema["types"][TTypeName]["name"] extends TTypeName
    ? MergeValidationResults<
        {
          [K in Extract<
            keyof TSchema["types"][TTypeName]["fields"],
            string
          >]-?: ValidateInterfaceTypeFieldDescription<
            TSchema,
            TSchema["types"][TTypeName],
            K
          >;
        }[Extract<keyof TSchema["types"][TTypeName]["fields"], string>]
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
        `schema.types.${TTypeName} is not valid InterfaceTypeDefinitionDescription`
      ];
    };
