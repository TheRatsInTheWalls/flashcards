const router = require('express').Router()
const questionsController = require('../controllers/addresses.controller')
const validateBody = require('../filters/validate.body')
const question = require('../models/question')


module.exports = router

//api routes ====================================================================
router.get('/', questionsController.readAll)
router.get('/:id([0-9a-fA-F]{24})', questionsController.readById)
router.post('/', validateBody(question), questionsController.create)
router.put('/:id([0-9a-fA-F]{24})', validateBody(question), questionsController.update)
router.delete('/:id([0-9a-fA-F]{24})', questionsController.delete)