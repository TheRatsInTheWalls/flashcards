'use strict'
const questionsService = require('../services/questions-service')
const apiPrefix = '/api/questions'

module.exports = {
    readAll: _readAll,
    readById: _readById,
    create: _create,
    update: _update,
    delete: _delete,
}

function _readAll(req, res) {
    questionsService
        .readAll()
        .then(questions => {
            res.json(questions)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function _readById(req, res) {
    questionsService
        .readById(req.params.id)
        .then(question => {
            res.send(question)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function _create(req, res) {
    questionsService
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
    questionsService
        .update(req.params.id, req.model)
        .then(() => {
            res.status(200).send(`${req.params.id} updated`)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function _delete(req, res) {
    questionsService
        .deactivate(req.params.id)
        .then(() => {
            res.status(200).json(`${req.params.id} deleted`)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

