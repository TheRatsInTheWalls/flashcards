'use strict'
const router = require('express').Router()
const categoriesController = require('../controllers/categories.controller')
const validateBody = require('../filters/validate.body')
const category = require('../models/category')


module.exports = router

//api routes ====================================================================
router.get('/', categoriesController.readAll)
router.get('/:id([0-9a-fA-F]{24})', categoriesController.readById)
router.post('/', validateBody(category), categoriesController.create)
router.put('/:id([0-9a-fA-F]{24})', validateBody(category), categoriesController.update)
router.delete('/:id([0-9a-fA-F]{24})', categoriesController.delete)