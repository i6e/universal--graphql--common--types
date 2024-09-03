import { ExpandRecursively } from "@icehouse/universal--util--typescript--types";
import { ValidateSchemaDefinitionDescription } from "../../types/advanced/schema/validate/ValidateSchemaDefinitionDescription";
import { Mutation } from "./types/Mutation";
import { Query } from "./types/Query";

import { User } from "./types/User";

export type Schema = {
  query: "Query";
  mutation: "Mutation";
  types: {
    Query: Query;
    Mutation: Mutation;
    User: User;
  };
};

type MyValidationResult = ExpandRecursively<
  ValidateSchemaDefinitionDescription<Schema>
>;
