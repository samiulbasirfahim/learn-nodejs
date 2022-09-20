/* This is index of application  */

const dbConnect = require("./utils/dbConnect.js")
const express = require("express")
const home = require("./routes/home")
require("dotenv").config()

/* application */
const app = express()

/* ejs setup */
app.use(express.static("public"))
app.set("view engine", "ejs")

/* connect to database */
dbConnect()

/* routes */
app.use("/", home)

/* listening server */
try {
  app.listen(process.env.port, process.env.hostname, () =>
    console.log(
      `server listening on ${process.env.hostname}:${process.env.port}`
    )
  )
} catch (error) {
  console.log(error)
}
