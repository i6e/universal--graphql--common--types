export interface User {
  type: "object";
  fields: {
    comments: {
      type: {
        type: "array";
        isArrayRequired: true;
        elementType: {
          type: "terminal";
          isRequired: true;
          typeName: "Comment";
        };
      };
      arguments: {};
    };
  };
  implements: "Entity";
}
