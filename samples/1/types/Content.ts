export interface Content {
  type: "interface";
  fields: {
    content: {
      type: {
        type: "terminal";
        isRequired: true;
        typeName: "String";
      };
      arguments: {
        first: {
          type: "terminal";
          isRequired: false;
          typeName: "Int";
        };
      };
    };
    createTime: {
      type: {
        type: "terminal";
        isRequired: true;
        typeName: "Date";
      };
      arguments: {};
    };
    updateTime: {
      type: {
        type: "terminal";
        isRequired: false;
        typeName: "Date";
      };
      arguments: {};
    };
  };
}
