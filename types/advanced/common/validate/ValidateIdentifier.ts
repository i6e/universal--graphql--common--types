type Alphabets =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

type Numbers = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export type ValidateIdentifier<
  TDebugPath extends string,
  TIdentifier extends string
> = TIdentifier extends `${Alphabets | "_"}${infer I extends string}`
  ? ValidateIdentifierInternal<TDebugPath, TIdentifier, I>
  : `${TDebugPath}: Invalid identifier: ${TIdentifier}`;

type ValidateIdentifierInternal<
  TDebugPath extends string,
  TIdentifierBackup extends string,
  TIdentifier extends string
> = TIdentifier extends `${Alphabets | Numbers | "_"}${infer I extends string}`
  ? ValidateIdentifierInternal<TDebugPath, TIdentifierBackup, I>
  : TIdentifier extends ""
  ? never
  : `${TDebugPath}: Invalid identifier: ${TIdentifierBackup}`;
