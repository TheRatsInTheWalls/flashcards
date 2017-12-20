'use strict'
const mongodb = require('../mongodb')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
    readAll: _readAll,
    readById: _readById,
    create: _create,
    update: _update,
    deactivate: _deactivate,

}

function _readAll() {
    return conn.db().collection('categories').find({"dateDeactivated": null }).toArray()
        .then(categories => {
            for (let i = 0; i < categories.length; i++) {
                let category = categories[i]
                category._id = category._id.toString()
                
            }
            return categories
        })
        .catch(data => console.log(data))
}

function _readById(id) {
    return conn.db().collection('categories').findOne({ _id: new ObjectId(id), "dateDeactivated": null })
        .then(category => {
            category._id = category._id.toString()
            return category
        })
        .catch(data => console.log(data))
}

function _create(doc) {
    let now = new Date()
    let newDoc = { 
        category: doc.category, 
        displayOrder: doc.displayOrder, 
        dateCreated: now, 
        dateModified: now, 
        dateDeactivated: null 
    }
    return conn.db().collection('categories')
        .insert(newDoc)
        .then(result => result.insertedIds[0].toString())
}

function _update(id, doc) {
    let now = new Date()
    let newDoc = { 
        category: doc.category, 
        displayOrder: doc.displayOrder,
        dateModified: now
    }
    return conn.db().collection('categories').updateOne({ _id: ObjectId(id) }, { $set: newDoc })
        .then(result => Promise.resolve())
}

function _deactivate(id) {
    let now = new Date()
    return conn.db().collection('categories').updateOne({ _id: new ObjectId(id) }, { $set: { dateModified: now, dateDeactivated: now } })
        .then(result => Promise.resolve())
}
