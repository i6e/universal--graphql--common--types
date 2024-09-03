import { Values } from "@icehouse/universal--util--typescript--types";
import { ValidateIdentifiers } from "../../common/validate/ValidateIdentifiers";
import { ObjectTypeFieldDescription } from "../ObjectTypeFieldDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { ValidateInputTypeDescription } from "./ValidateInputTypeDescription";
import { ValidateOutputTypeDescription } from "./ValidateOutputTypeDescription";
import { ValidateNonUnion } from "./util/ValidateNonUnion";

export type ValidateObjectTypeFieldDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TField
> =
  | ValidateNonUnion<TDebugPath, TField, "Field(internal)">
  | (TField extends ObjectTypeFieldDescription
      ?
          | ValidateIdentifiers<
              `${TDebugPath}.arguments`,
              Extract<keyof TField["arguments"], string>
            >
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
      : `${TDebugPath}: Malformed field`);
