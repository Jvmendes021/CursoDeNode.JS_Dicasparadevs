const express = require("express");

 const app = express();

 app.get("/home", (req, res) => {
    res.contentType("application/html");
    res.status(200).send("<h1> Hello World </h1>");
});

app.get("/users", (req, res) => {
    const users = [
    {
        name: 'Joao Vitor',
        email: 'joao.vitor13mendes@gmail.com'
    },
    {
        name: 'Mendes',
        email: 'dj8mendes@gmail.com'
    },
  ];
    
  res.json(users);
})

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}!` ));