const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// configurando o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


// rotas

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender node.js',
        category: 'javascript',
        body: "Este artigo vai te ajudar a aprender Node.js",
        comments: 4
    }

    res.render('post', {post})
})
app.get('/dashboard', (req,res) => {
    const items = ['item a', 'item b', 'item c']
    res.render('dashboard', {items})
})

app.get('/', (req, res) => {
    const usuario = {
        nome: "julia",
        profissao: "estudante",
        idade: 20
    }
    const auth = true
    res.render('home', {usuario, auth})
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})