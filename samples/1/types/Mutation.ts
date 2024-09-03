export type Mutation = {
  type: "object";
  fields: {
    updateName: {
      type: {
        type: "terminal";
        isRequired: true;
        typeName: "User";
      };
      arguments: {
        name: {
          type: "terminal";
          isRequired: true;
          typeName: "String";
        };
      };
    };
  };
  implements: never;
};
