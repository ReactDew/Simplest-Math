const express = require('express')
const app = express()
const path = require("path");
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const fractionRoute = require('./routes/fractions')
const authRoute = require('./routes/auth')
const studentRoute = require('./routes/students')

const PORT = process.env.PORT || 5000;

dotenv.config()
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "client", "build")));

mongoose.connect(process.env.MONGO_URL).then(() => console.log('MongoDB Connected!')).catch(err => console.log(err))

app.use('/api/auth', authRoute)
app.use('/api/fractions', fractionRoute)
app.use('/api/students', studentRoute)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(PORT, () => {
  console.log('Server started on port 5000!')
})