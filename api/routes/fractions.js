const router = require('express').Router()
const Fraction = require('../models/Fraction')

// Create
router.post('/', async (req, res) => {
  const newFraction = new Fraction(req.body)
  try {
    const savedFraction = await newFraction.save()
    res.status(200).json(savedFraction)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get
router.get('/', async (req, res) => {
  try {
    const fractions = await Fraction.find()
    res.status(200).json(fractions)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router