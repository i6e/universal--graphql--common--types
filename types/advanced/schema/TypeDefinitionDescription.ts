import { EnumTypeDefinitionDescription } from "./EnumTypeDefinitionDescription";
import { InputTypeDefinitionDescription } from "./InputTypeDefinitionDescription";
import { InterfaceTypeDefinitionDescription } from "./InterfaceTypeDefinitionDescription";
import { ObjectTypeDefinitionDescription } from "./ObjectTypeDefinitionDescription";
import { ScalarTypeDefinitionDescription } from "./ScalarTypeDefinitionDescription";
import { UnionTypeDefinitionDescription } from "./UnionTypeDefinitionDescription";

export type TypeDefinitionDescription =
  | InterfaceTypeDefinitionDescription
  | ObjectTypeDefinitionDescription
  | UnionTypeDefinitionDescription
  | EnumTypeDefinitionDescription
  | InputTypeDefinitionDescription
  | ScalarTypeDefinitionDescription;
