const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const connectDB = require("./config/db.js");

const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development", // if NODE_ENV === development, then graphiql is true
  })
);

app.listen(port, () =>
  console.log(`Server running on port ${port}`.cyan.bold.underline)
);
