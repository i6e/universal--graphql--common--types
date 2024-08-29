import { TypeDefinition } from "./TypeDefinition";

export interface Schema {
  types: Record<string, TypeDefinition>;
}
