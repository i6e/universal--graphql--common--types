import { ObjectTypeFieldDefinition } from "./ObjectTypeFieldDefinition";

export interface ObjectTypeDefinition {
  type: "object";
  name: string;
  fields: Record<string, ObjectTypeFieldDefinition[]>;
  implements?: string[];
}
