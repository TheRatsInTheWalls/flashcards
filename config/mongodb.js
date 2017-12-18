const conn = require('../app/mongodb').connection

module.exports = configMongoDB

function configMongoDB(app) {
    // return Promise.all(
    //     [
    //         conn.db().ensureIndex('faqEntries', { faqCategoryId: 1, displayOrder: 1 }, { unique: true }),

    //     ]
    // )
}