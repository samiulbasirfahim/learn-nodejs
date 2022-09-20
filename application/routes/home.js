const { home } = require("../controllers/home.js")
const router = require("express").Router()

router.get("/", home)

module.exports = router
