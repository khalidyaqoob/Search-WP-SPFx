declare interface IStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  QueryFieldLabel: string;
  FieldsFieldLabel: string;
  FieldsTemplateLabel: string;
}

declare module 'mystrings' {
  const strings: IStrings;
  export = strings;
}
