const mongoose = require('mongoose')

const debtorCollection = 'debtor'

const debtorSchema = new mongoose.Schema({
  code_identity: Number,
  status: Number,
  loan: Number,
  code_entity: {
    type: Number,
    ref: 'entity',
    default: 72
  }
})

const Debtor = mongoose.model(debtorCollection, debtorSchema)

module.exports = Debtor