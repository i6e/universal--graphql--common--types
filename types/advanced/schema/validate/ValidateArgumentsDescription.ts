import { IsSameType } from "@icehouse/universal--util--typescript--types";
import { ArgumentDescription } from "../ArgumentDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { MergeValidationResults } from "./util/MergeValidationResults";
import { ValidateInputType } from "./ValidateInputType";

export type ValidateArgumentsDescription<
  TSchema extends SchemaDefinitionDescription,
  TArguments extends {},
  TDebugPath extends string
> = MergeValidationResults<
  {
    [K in Extract<keyof TArguments, string>]-?: ValidateArgumentDescription<
      TSchema,
      TArguments[K],
      TDebugPath,
      K
    >;
  }[Extract<keyof TArguments, string>]
>;

type ValidateArgumentDescription<
  TSchema extends SchemaDefinitionDescription,
  TArgument,
  TDebugPath extends string,
  TName extends string
> = TArgument extends ArgumentDescription
  ? MergeValidationResults<
      | (IsSameType<TName, TArgument["name"]> extends false
          ? {
              success: false;
              messages: [
                `${TDebugPath}.${TName}.name is not match with ${TName}`
              ];
            }
          : never)
      | ValidateInputType<TSchema, TArgument, `${TDebugPath}.${TName}`>
    >
  : {
      success: false;
      messages: [`${TDebugPath} is not valid ArgumentDescription`];
    };
