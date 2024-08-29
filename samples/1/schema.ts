import { ValidateSchemaDefinitionDescription } from "../../types/advanced/schema/validate/ValidateSchemaDefinitionDescription";

export type Schema = {
  query: "Query";
  mutation: "Mutation";
  types: {
    test: number;
  };
};

type MyValidationResult = ValidateSchemaDefinitionDescription<Schema>;
