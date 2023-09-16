const path = require('path')
const express = require('express')
const router = express.Router()

router.get("/products", function(req, res){
    res.sendFile(path.join(__dirname,"../", "views","index.html"))
})

router.post("/products", function(req, res){
    res.sendFile('../views/index.html')
})

router.get("/brands", function(req, res){
    res.send({
        brands: "Ok",
        sucess: true
    })
})

module.exports = router