const { oldVisit } = require("@graphql-codegen/plugin-helpers")
const { TsVisitor, includeIntrospectionTypesDefinitions } = require("@graphql-codegen/typescript")
const { transformSchemaAST } = require("@graphql-codegen/schema-ast")

class EnumOnlyTsVisitor extends TsVisitor {
  get scalarsDefinition() {
    return "";
  }
  getWrapperDefinitions() {
    return [];
  }
  InputObjectTypeDefinition() {
    return "";
  }
}

module.exports = {
  plugin: (schema, documents, config) => {
    const { schema: _schema, ast } = transformSchemaAST(schema, config);
    const visitor = new EnumOnlyTsVisitor(_schema, config)

    const visitorResult = oldVisit(ast, { leave: visitor });
    const introspectionDefinitions = includeIntrospectionTypesDefinitions(_schema, documents, config);
    const scalars = visitor.scalarsDefinition;
    const directiveArgumentAndInputFieldMappings = visitor.directiveArgumentAndInputFieldMappingsDefinition;

    return {
      prepend: [
        ...visitor.getEnumsImports(),
        ...visitor.getDirectiveArgumentAndInputFieldMappingsImports(),
        ...visitor.getScalarsImports(),
        ...visitor.getWrapperDefinitions(),
      ].filter(Boolean),
      content: [
        scalars,
        directiveArgumentAndInputFieldMappings,
        ...visitorResult.definitions,
        ...introspectionDefinitions,
      ]
        .filter(Boolean)
        .join('\n'),
    };
  }
}
