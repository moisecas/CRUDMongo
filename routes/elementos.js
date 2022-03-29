const express = require('express')
const router = express.Router()

const elementosController = require('../controllers/elementosController')

router.get('/', elementosController.mostrar)

module.exports = router 