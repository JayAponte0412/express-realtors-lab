const express = require("express");

//MIDDLEWARE 
const cors = require('cors')
const logger = require('morgan')

const apartmentsRouter = require('./routes/apartments')
const housesRouter = require('./routes/houses')

const PORT = process.env.PORT || 3001;
const app = express();


app.use(cors())
app.use(logger('dev'))
app.use(express.json())


app.get('/', function (req, res) {
    res.json({msg: 'Server is running'})
})

app.use('/apartments', apartmentsRouter)
app.use('/houses', housesRouter)

app.listen(PORT, function () {
    console.log(`Server is running on ${PORT}`)
});
