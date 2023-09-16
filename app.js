var express = require('express')
var app = express()
const bodyParser=require("body-parser");
const adminRoutes = require("./rotas/admin")
const shopProdutos = require("./rotas/shop");
const exp = require('constants');

app.use("/shop",express.static('views'))
app.use(adminRoutes)
app.use("/shop",shopProdutos)

app.use((req, res) =>{
    res.status(404).send("<h1>Not Found</h1>")
})


app.listen(3000);