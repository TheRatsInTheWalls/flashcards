'use strict'
const categoriesService = require('../services/categories-service')
const apiPrefix = '/api/categories'

module.exports = {
    readAll: _readAll,
    readById: _readById,
    create: _create,
    update: _update,
    delete: _delete,
}

function _readAll(req, res) {
    categoriesService
        .readAll()
        .then(categories => {
            res.json({ categories: categories })
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })

}

function _readById(req, res) {
    categoriesService
        .readById(req.params.id)
        .then(category => {
            category._id = questcategoryions._id.tostring()
            res.send(category)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function _create(req, res) {
    categoriesService
        .create(req.model)
        .then(id => {
            res.status(201).location(`${apiPrefix}/${id}`).send(`${id} created`)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function _update(req, res) {
    categoriesService
        .update(req.params.id, req.model)
        .then(() => {
            const responseModel = new responses.SuccessResponse()
            res.status(200).send(`${req.params.id} updated`)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function _delete(req, res) {
    categoriesService
        .deactivate(req.params.id)
        .then(() => {
            const responseModel = new responses.SuccessResponse()
            res.status(200).json(`${req.params.id} deleted`)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

