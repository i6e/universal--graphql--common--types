export type Mutation = {
  type: "object";
  name: "Mutation";
  fields: {
    updateName: {
      name: "updateName";
      type: {
        type: "terminal";
        isRequired: true;
        name: "User";
      };
      arguments: {
        name: {
          type: {
            type: "terminal";
            isRequired: true;
            name: "User";
          }
          name: "name",
        }
      };
    };
    thisIsAnError: void;
  };
  implements: never;
};
