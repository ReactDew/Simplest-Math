const router = require('express').Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const CryptoJS = require('crypto-js')

// Register user
router.post('/register', async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString()
  })
  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name })
    !user && res.status(401).json('Wrong data')
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET)
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
    originalPassword !== req.body.password && res.status(401).json('Wrong data')
    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin
    }, process.env.JWT_SECRET, { expiresIn: '5d'})
    const { password, ...others } = user._doc
    res.status(200).json({ ...others, accessToken })
  } catch (err) {
    res.status(500).json(err)
    console.log(err);
  }
})

module.exports = router