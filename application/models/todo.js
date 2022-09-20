const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
    min: 3,
    max: 30,
  },
  description: {
    required: true,
    type: String,
    max: 400,
  },
  addedBy: {
    type: String,
    required: true,
  },
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo
