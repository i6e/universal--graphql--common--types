import { ObjectTypeFieldDefinition } from "./ObjectTypeFieldDefinition";

export interface InterfaceTypeDefinition {
  type: "interface";
  name: string;
  fields: Record<string, ObjectTypeFieldDefinition[]>;
}
