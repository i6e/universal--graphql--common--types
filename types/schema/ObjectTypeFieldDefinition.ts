import { ArgumentDefinition } from "./ArgumentDefinition";

export interface ObjectTypeFieldDefinition {
  name: string;
  arguments?: Record<string, ArgumentDefinition>;
  type: string;
}
