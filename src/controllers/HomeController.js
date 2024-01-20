exports.HomePage = (req, res) => {
    res.send(` 
    <form action="/" method="POST"> 
    Nome: <input type="text" name="nome" /><br>
    Idade: <input type="number" name="idade" /><br>
    `)
}

exports.SearchPage =(req, res) => {
    res.send(`
      Search: <input type="text" name="search" />
    `)
}