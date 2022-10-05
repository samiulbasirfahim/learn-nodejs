const mongoose = require("mongoose")

const connectDatabase = (callback) => {
  mongoose.connect(process.env.mongodb_connection_string, (err) => {
    if (err) {
      callback(err)
    } else {
      callback()
    }
  })
}
module.exports = connectDatabase
