import { Values } from "@icehouse/universal--util--typescript--types";
import { ObjectTypeFieldDescription } from "../ObjectTypeFieldDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { ValidateInputTypeDescription } from "./ValidateInputTypeDescription";
import { ValidateOutputTypeDescription } from "./ValidateOutputTypeDescription";

export type ValidateObjectTypeFieldDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TField
> = TField extends ObjectTypeFieldDescription
  ?
      | Values<{
          [K in Extract<
            keyof TField["arguments"],
            string
          >]: ValidateInputTypeDescription<
            TSchema,
            `${TDebugPath}.arguments.${K}`,
            TField["arguments"][K]
          >;
        }>
      | ValidateOutputTypeDescription<
          TSchema,
          `${TDebugPath}.type`,
          TField["type"]
        >
  : `${TDebugPath}: Malformed field`;
