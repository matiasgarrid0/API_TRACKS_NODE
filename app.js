require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const dbConnect = require('./config/mongo')

app.use(cors())
app.use(express.json())
app.use(express.static('storage'))

const port = process.env.PORT

//TODO http://localhost:3001/api/...
app.use('/api', require('./routes'))


app.listen(port, ()=>{
    console.log('app listening in port ' + port)
})

dbConnect()