const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Src/Schema/schema");
const colors = require("colors");
const connectDB = require("./Config/db");
const port = process.env.PORT || 3000;

const app = express();
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, console.log(`Server is running on port ${port}`));
