export interface Entity {
  type: "interface";
  fields: {
    id: {
      type: {
        type: "terminal";
        isRequired: true;
        typeName: "ID";
      };
      arguments: {};
    };
  };
}
