/* imports all module */
import express from "express"
import config from "./src/utils/config.js"

/* application */
const app = express()

/* configure applicaion */
app.config = config

/* listening server */
app.listen(app.config.port, () =>
  console.log("server listening on port " + app.config.port)
)
