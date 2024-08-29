import { EnumTypeDefinition } from "./EnumTypeDefinition";
import { InputTypeDefinition } from "./InputTypeDefinition";
import { InterfaceTypeDefinition } from "./InterfaceTypeDefinition";
import { ObjectTypeDefinition } from "./ObjectTypeDefinition";
import { ScalarTypeDefinition } from "./ScalarTypeDefinition";
import { UnionTypeDefinition } from "./UnionTypeDefinition";

export type TypeDefinition =
  | InterfaceTypeDefinition
  | ObjectTypeDefinition
  | UnionTypeDefinition
  | EnumTypeDefinition
  | InputTypeDefinition
  | ScalarTypeDefinition;
