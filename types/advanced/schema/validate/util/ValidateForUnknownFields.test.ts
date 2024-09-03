import { Equal } from "../../../../__test__/Equal";
import { Expect } from "../../../../__test__/Expect";
import { ValidateForUnknownFields } from "./ValidateForUnknownFields";

export type Cases = [
  Expect<Equal<ValidateForUnknownFields<never, never, never>, never>>,
  Expect<Equal<ValidateForUnknownFields<"X", {}, "test">, never>>,
  Expect<Equal<ValidateForUnknownFields<"X", { test: "foo" }, "test">, never>>,
  Expect<
    Equal<
      ValidateForUnknownFields<"X", { foo: "bar" }, "test">,
      "X: Unknown fields: foo"
    >
  >,
  Expect<
    Equal<
      ValidateForUnknownFields<"X", { foo: "bar"; test: "baz" }, "test">,
      "X: Unknown fields: foo"
    >
  >,
  Expect<
    ValidateForUnknownFields<"X", { foo: "bar"; baz: "quz" }, "test"> extends
      | "X: Unknown fields: foo, baz"
      | "X: Unknown fields: baz, foo"
      ? true
      : false
  >
];
