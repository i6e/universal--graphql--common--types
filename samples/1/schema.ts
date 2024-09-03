import { ExpandRecursively } from "@icehouse/universal--util--typescript--types";
import { ValidateSchemaDefinitionDescription } from "../../types/advanced/schema/validate/ValidateSchemaDefinitionDescription";
import { Comment } from "./types/Comment";
import { Content } from "./types/Content";
import { CustomScalar } from "./types/CustomScalar";
import { Entity } from "./types/Entity";
import { Mutation } from "./types/Mutation";
import { Post } from "./types/Post";
import { Query } from "./types/Query";
import { User } from "./types/User";

export type Schema = {
  query: "Query";
  mutation: "Mutation";
  types: {
    Query: Query;
    Mutation: Mutation;
    Date: CustomScalar;
    Content: Content;
    Entity: Entity;
    User: User;
    Post: Post;
    Comment: Comment;
  };
};

type MyValidationResult = ExpandRecursively<
  ValidateSchemaDefinitionDescription<Schema>
>;
