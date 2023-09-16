const express = require('express')
const router = express.Router()

router.post("/add-product", function(req, res){
    res.send({
        created: "OK",
        sucess: true,
        method: "POST"
    })
})

router.get("/add-product", function(req, res){
    res.send({
        created: "OK",
        sucess: true,
        method: "GET"
    })
})


router.post("/delete-product", function(req, res){
    console.log('req.body')
    res.send({delete: "Ok"})
})


module.exports = router