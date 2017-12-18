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
    return conn.db().collection('questions').find({"dateDeactivated": null }).toArray()
        .then(questions => {
            for (let i = 0; i < questions.length; i++) {
                let question = questions[i]
                question._id = question._id.toString()
                question.categoryId = question.categoryId.toString()
            }
            return entries
        })
        .catch(data => console.log(data))
}

function _readById(id) {
    return conn.db().collection('questions').findOne({ _id: new ObjectId(id), "dateDeactivated": null })
        .then(question => {
            question._id = question._id.toString()
            question.categoryId = question.categoryId.toString()
            return question
        })
        .catch(data => console.log(data))
}

function _create(doc) {
    let now = new Date()
    let newDoc = { 
        categoryId: new ObjectId(doc.categoryId), 
        question: doc.question, 
        answer: doc.answer, 
        displayOrder: doc.displayOrder, 
        dateCreated: now, 
        dateModified: now, 
        dateDeactivated: null 
    }
    return conn.db().collection('questions')
        .insert(newDoc)
        .then(result => result.insertedIds[0].toString())
}

function _update(id, doc) {
    let now = new Date()
    let newDoc = { 
        categoryId: ObjectId(doc.categoryId), 
        question: doc.question, 
        answer: doc.answer, 
        displayOrder: doc.displayOrder,
        dateModified: now
    }
    return conn.db().collection('questions').updateOne({ _id: ObjectId(id) }, { $set: newDoc })
        .then(result => Promise.resolve())
}

function _deactivate(id) {
    let now = new Date()
    return conn.db().collection('questions').updateOne({ _id: new ObjectId(id) }, { $set: { dateModified: now, dateDeactivated: now } })
        .then(result => Promise.resolve())
}
