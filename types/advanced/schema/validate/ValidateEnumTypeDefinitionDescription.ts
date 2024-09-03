import { EnumTypeDefinitionDescription } from "../EnumTypeDefinitionDescription";
import { ValidateForUnknownFields } from "./util/ValidateForUnknownFields";
import { ValidateStringLiteral } from "./util/ValidateStringLiteral";

export type ValidateEnumTypeDefinitionDescription<
  TDebugPath extends string,
  TType extends EnumTypeDefinitionDescription
> =
  | ValidateForUnknownFields<
      TDebugPath,
      TType,
      keyof EnumTypeDefinitionDescription
    >
  | ValidateStringLiteral<
      `${TDebugPath}.variants`,
      TType["variants"],
      "Enum variants"
    >;
