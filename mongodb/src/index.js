const express = require("express")
const dotenv = require("dotenv")
const connectDatabase = require("./utils/connectDatabase")
const userRouter = require("./routes/version-1/user.route")

dotenv.config()

const app = express()

app.port = 3000

connectDatabase((err) => {
  if (err) {
    console.log(err.message)
  } else {
    app.listen(app.port, () => console.log(`app listening on port ${app.port}`))
  }
})

app.use(express.json())

app.use("/user", userRouter)
