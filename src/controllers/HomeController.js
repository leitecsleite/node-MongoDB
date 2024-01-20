
exports.HomePage = (req, res) => {
  res.render('index')
  return;
}

exports.sendData = (req, res) => {
  res.send(req.body)
}

exports.SearchPage = (req, res) => {
  res.send(`
      Search: <input type="text" name="search" />
    `)
}