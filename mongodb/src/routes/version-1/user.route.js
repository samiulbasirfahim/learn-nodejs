const express = require("express")
const {
  addUser,
  getUser,
} = require("../../controllers/version-1/user.controller")

const router = new express.Router()

router.post("/", addUser)
router.get("/:id?", getUser)

const userRouter = router

module.exports = userRouter
