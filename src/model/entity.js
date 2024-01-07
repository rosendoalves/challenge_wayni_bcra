const mongoose = require('mongoose')

const entityCollection = 'entity'

const entitySchema = new mongoose.Schema({
  code_entity: Number,
  sum_loan: Number,
});


const Entity = mongoose.model(entityCollection, entitySchema)

module.exports = Entity