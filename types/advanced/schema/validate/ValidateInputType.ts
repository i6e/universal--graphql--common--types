import { ArgumentDescription } from "../ArgumentDescription";
import { ArrayDescription } from "../ArrayDescription";
import { EnumTypeDefinitionDescription } from "../EnumTypeDefinitionDescription";
import { InputTypeDefinitionDescription } from "../InputTypeDefinitionDescription";
import { ScalarTypeDefinitionDescription } from "../ScalarTypeDefinitionDescription";
import { SchemaDefinitionDescription } from "../SchemaDefinitionDescription";
import { TerminalDescription } from "../TerminalDescription";
import { TypeDescription } from "../TypeDescription";

type IsInputType<
  TSchema extends SchemaDefinitionDescription,
  TName extends string
> = TName extends keyof TSchema["types"]
  ? TSchema["types"][TName] extends
      | InputTypeDefinitionDescription
      | ScalarTypeDefinitionDescription
      | EnumTypeDefinitionDescription
    ? true
    : false
  : false;

export type ValidateInputTypeInternal<
  TSchema extends SchemaDefinitionDescription,
  TArgument extends TypeDescription,
  TDebugPath extends string
> = TArgument extends TerminalDescription
  ? IsInputType<TSchema, TArgument["name"]> extends true
    ? { success: true; messages: [] }
    : { success: false; messages: [`${TDebugPath} has non-input type`] }
  : TArgument extends ArrayDescription
  ? ValidateInputTypeInternal<TSchema, TArgument["elementType"], TDebugPath>
  : { success: false; messages: [`${TDebugPath} has non-argument type`] };

export type ValidateInputType<
  TSchema extends SchemaDefinitionDescription,
  TArgument extends ArgumentDescription,
  TDebugPath extends string
> = ValidateInputTypeInternal<TSchema, TArgument["type"], TDebugPath>;
