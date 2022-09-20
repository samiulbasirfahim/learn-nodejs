const home = (req, res) => {
  res.render("index.ejs", {
    name: "fahim",
  })
}

module.exports = { home }
