const express = require("express");
const graphqlHHTP = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./schema/schema");

const app = express();

const password = process.env.MONGO_GRAPHQL_EXAMPLE_PROJECT_PASSWORD;

mongoose.connect(
  `mongodb+srv://admin:${password}@cluster0-5zsa6.azure.mongodb.net/test?retryWrites=true&w=majority`
);
mongoose.connection.once("open", () => console.log("connected to database"));

app.use("/graphql", graphqlHHTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
