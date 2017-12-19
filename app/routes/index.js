'use strict'
const router = require('express').Router()
const questionsRoutes = require('./questions.routes')
const clientRoutes = require('./client.routes')
const categoriesRoutes = require('./categories.routes')
module.exports = router;

router.use('/api/questions', questionsRoutes)
router.use('/api/categories', categoriesRoutes)

useAPIErrorHandlers(router)
router.use(clientRoutes)
function useAPIErrorHandlers(router) {
    router.use('/api/*', (req, res, next) => {
        res.sendStatus(404)
    })

    // Handle API 500
    router.use((err, req, res, next) => {
        if (!err) {
            return next()
        }
        console.error(err.stack)
        res.sendStatus(500)
    })
}
