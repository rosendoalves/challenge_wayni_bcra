const mongoose = require('mongoose')

const debtorCollection = 'debtor'

const debtorSchema = new mongoose.Schema({
  code_identity: Number,
  status: Number,
  loan: Number,
})

const Debtor = mongoose.model(debtorCollection, debtorSchema)

module.exports = Debtor