export interface Post {
  type: "object";
  fields: {
    author: {
      type: {
        type: "terminal";
        isRequired: true;
        typeName: "User";
      };
      arguments: {};
    };
  };
  implements: "Entity" | "Content";
}
