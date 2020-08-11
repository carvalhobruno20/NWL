//Servidor
const express = require('express')
const server = express()

const { 
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//Configurar Nunjucks (nunjucks template)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//Inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({ extended:true }))
//Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//Rotas da Aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
//Porta do Servidor
.listen(5500)
