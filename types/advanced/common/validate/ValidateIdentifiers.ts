import { Values } from "@icehouse/universal--util--typescript--types";
import { ValidateIdentifier } from "./ValidateIdentifier";

export type ValidateIdentifiers<
  TDebugPath extends string,
  TIdentifier extends string
> = Values<{
  [K in TIdentifier]: ValidateIdentifier<TDebugPath, K>;
}>;
