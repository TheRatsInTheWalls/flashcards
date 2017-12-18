'use-strict'
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schema = {
    _id: Joi.objectId(),
    categoryId: Joi.objectId().required(),
    question: Joi.string().required(),
    answer: Joi.string().required(),
    displayOrder: Joi.number().required()
}

module.exports = Joi.object().keys(schema)