export const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Notas API",
        version: "1.0.0",
        description: "una simple express libreria API",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./src/routes/*.ts"],
  };