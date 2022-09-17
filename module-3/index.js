/* This is index of application  */

const dbConnect = require("./utils/dbConnect.js");
const express = require("express");
require("dotenv").config();

/* application */
const app = express();

/* connect to database */
dbConnect();

/* listening server */
try {
  app.listen(process.env.port, process.env.hostname, () =>
    console.log(
      `server listening on ${process.env.hostname}:${process.env.port}`
    )
  );
} catch (error) {
  console.log(error);
}
