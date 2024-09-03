export interface Comment {
  type: "object";
  fields: {
    post: {
      type: {
        type: "terminal";
        isRequired: true;
        typeName: "Post";
      };
      arguments: {};
    };
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
