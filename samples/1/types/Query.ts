export type Query = {
  type: "object";
  name: "Query";
  fields: {
    me: {
      name: "me";
      type: {
        type: "terminal";
        isRequired: true;
        name: "User";
      };
      arguments: {};
    };
  };
  implements: never;
};
