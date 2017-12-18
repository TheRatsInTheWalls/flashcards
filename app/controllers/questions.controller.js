//const responses = require('../models/responses');
const questionsService = require('../services/questions-service')
const apiPrefix = '/api/questions';

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
        // .then(entries => {
        //     const responseModel = new responses.ItemsResponse()
        //     responseModel.items = entries
        //     res.json(responseModel)
        // })
        // .catch(err => {
        //     console.log(err)
        //     res.status(500).send(new responses.ErrorResponse(err))
        // })

}

function _readById(req, res) {
    questionsService
        .readById(req.params.id)
        // .then(faqEntry => {
        //     const responseModel = new responses.ItemResponse()
        //     responseModel.item = faqEntry
        //     res.json(responseModel)
        // })
        // .catch(err => {
        //     console.log(err)
        //     res.status(500).send(new responses.ErrorResponse(err))
        // })
}

function _create(req, res) {
    questionsService
        .create(req.model)
        // .then(id => {
        //     const responseModel = new responses.ItemResponse()
        //     responseModel.item = id
        //     res.status(201)
        //         .location(`${apiPrefix}/${id}`)
        //         .json(responseModel)
        // })
        // .catch(err => {
        //     console.log(err)
        //     if (err.code == 11000) {
        //         _catchIdError(res)
        //     } else {
        //         res.status(500).send(new responses.ErrorResponse(err))
        //     }
        // })
}

function _update(req, res) {
    questionsService
        .update(req.params.id, req.model)
        // .then(faqEntry => {
        //     const responseModel = new responses.SuccessResponse()
        //     res.status(200).json(responseModel)
        // })
        // .catch(err => {
        //     console.log(err)
        //     if (err.code == 11000) {
        //         _catchIdError(res)
        //     } else {
        //         res.status(500).send(new responses.ErrorResponse(err))
        //     }
        // })
}

function _delete(req, res) {
    questionsService
        .deactivate(req.params.id)
        // .then(faqEntry => {
        //     const responseModel = new responses.SuccessResponse()
        //     res.status(200).json(responseModel)
        // })
        // .catch(err => {
        //     console.log(err)
        //     res.status(500).send(new responses.ErrorResponse(err))
        // })
}

