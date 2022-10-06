const express = require("express")
const {
  addUser,
  getUser,
  deleteUser,
} = require("../../controllers/version-1/user.controller")

const router = new express.Router()

router.post("/", addUser)
router.get("/:id?", getUser)
router.delete("/:id", deleteUser)

const userRouter = router

module.exports = userRouter
