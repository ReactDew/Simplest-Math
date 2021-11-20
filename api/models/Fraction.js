const mongoose = require('mongoose')

const FractionSchema = new mongoose.Schema({
  firstNum: { type: Number, required: true },
  firstDen: { type: Number, required: true },
  operation: { type: String, required: true },
  secondNum: { type: Number, required: true },
  secondDen: { type: Number, required: true },
  answerNum: { type: Number, required: true },
  answerDen: { type: Number, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Fraction', FractionSchema)