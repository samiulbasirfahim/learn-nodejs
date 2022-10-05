const User = require("../../models/version-1/user.model")
const addUser = (req, res) => {
  const user = req.body
  if (user.name && user.age) {
    const new_user = new User({
      name: user.name,
      age: user.age,
    })
    new_user.save((err, result) => {
      if (err) {
        if (err?.keyValue?.name) {
          res.json({
            message: `name (${err?.keyValue?.name}) is duplicate, you should make it unique`,
            status: false,
          })
        } else {
          res
            .json({ message: "Something went wrong", status: false })
            .status(500)
        }
      } else if (result) {
        res.json(result)
      }
    })
  }
}

const getUser = (req, res) => {
  const id = req.params.id
  if (id) {
    User.findById(id, (err, user) => {
      if (err) {
        res.json({ message: "User not found", status: false }).status(404)
      } else {
        res.json(user)
      }
    })
  } else {
    User.find({}, (err, users) => {
      if (err) {
        res.json({ message: "No user found", status: false })
      } else if (users) {
        res.json(users)
      }
    })
  }
}

module.exports = {
  addUser,
  getUser,
}
