import { IsSameType } from "@icehouse/universal--util--typescript--types";

export type Equal<A, B> = IsSameType<A, B, true, false>;
