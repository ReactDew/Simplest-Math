const router = require('express').Router()
const User = require('../models/User')

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await User.find()
    res.status(200).json(students)
  } catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router