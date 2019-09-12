const express = require("express");
const graphqlHHTP = require("express-graphql");
const mongoose = require("mongoose");
const fs = require("fs");
const cors = require("cors");

const schema = require("./schema/schema");

const app = express();

const password = JSON.parse(fs.readFileSync("./mongoDBPassword.json")).password;

mongoose.connect(
  `mongodb+srv://admin:${password}@cluster0-5zsa6.azure.mongodb.net/test?retryWrites=true&w=majority`
);
mongoose.connection.once("open", () => console.log("connected to database"));

app.use(cors());
app.use("/graphql", graphqlHHTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
