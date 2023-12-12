var express = require('express')
var router = express.Router()
const carController = require('../Controller/carController')
//获取汽车列表
router.get('/list', carController.list)

module.exports = router
