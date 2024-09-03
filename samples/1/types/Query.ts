export type Query = {
  type: "object";
  fields: {
    me: {
      type: {
        type: "terminal";
        isRequired: true;
        typeName: "User";
      };
      arguments: {};
    };
  };
  implements: never;
};
