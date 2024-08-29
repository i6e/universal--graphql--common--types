import { InputTypeFieldDefinition } from "./InputTypeFieldDefinition";

export interface InputTypeDefinition {
  type: "input";
  name: string;
  fields: Record<string, InputTypeFieldDefinition>;
}
