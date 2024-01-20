exports.HomePage = (req, res) => {
    res.render('index')
}

exports.SearchPage =(req, res) => {
    res.send(`
      Search: <input type="text" name="search" />
    `)
}