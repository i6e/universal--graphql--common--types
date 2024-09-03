import { Values } from "@icehouse/universal--util--typescript--types";
import { ValidateIdentifiers } from "../../common/validate/ValidateIdentifiers";
import { InputTypeDefinitionDescription } from "../InputTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { ValidateForUnknownFields } from "./util/ValidateForUnknownFields";
import { ValidateInputTypeFieldDescription } from "./ValidateInputTypeFieldDescription";

export type ValidateInputTypeDefinitionDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TType extends InputTypeDefinitionDescription
> =
  | ValidateForUnknownFields<
      TDebugPath,
      TType,
      keyof InputTypeDefinitionDescription
    >
  | ValidateIdentifiers<
      `${TDebugPath}.fields`,
      Extract<keyof TType["fields"], string>
    >
  | Values<{
      [K in Extract<
        keyof TType["fields"],
        string
      >]: ValidateInputTypeFieldDescription<
        TSchema,
        `${TDebugPath}.fields.${K}`,
        TType["fields"][K]
      >;
    }>;
