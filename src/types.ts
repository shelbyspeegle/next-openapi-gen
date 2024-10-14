export type OpenApiConfig = {
  apiDir: string;
  schemaDir: string;
  docsUrl: string;
  ui: string;
  outputFile: string;
  includeOpenApiRoutes: boolean;
};

export type OpenApiTemplate = {
  openapi: string;
  info: {
    title: string;
    version: string;
    description: string;
  };
  servers: Array<{
    url: string;
    description: string;
  }>;
  paths: Record<string, any>;
};

export type DataTypes = {
  summary: string;
  description: string;
  paramsType: string;
  bodyType: string;
  responseType: string;
  isOpenApi: boolean;
};

export type RouteDefinition = {
  operationId: string;
  summary: string;
  description: string;
  tags: string[];
  parameters: any;
  requestBody?: any;
  responses?: any;
};
