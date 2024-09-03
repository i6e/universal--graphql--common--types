import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { TypeDescription } from "../TypeDescription";
import { ValidateNonUnion } from "./util/ValidateNonUnion";
import { ValidateInputTypeDescription } from "./ValidateInputTypeDescription";

export type ValidateInputTypeFieldDescription<
  TSchema extends SchemaDefinitionDescription,
  TDebugPath extends string,
  TField
> =
  | ValidateNonUnion<TDebugPath, TField, "Field(internal)">
  | (TField extends TypeDescription
      ? ValidateInputTypeDescription<
          TSchema,
          `${TDebugPath}.type`,
          TField["type"]
        >
      : `${TDebugPath}: Malformed field`);
