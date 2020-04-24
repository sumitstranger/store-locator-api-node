const path = require('path')
const express = require('express')
const dotenv= require('dotenv')
const cors= require('cors')
const connectDB = require('./config/db')

//load env vars
dotenv.config({path:'./config/config.env'});

//conect to db
connectDB();

const app = express()

//Body parser
app.use(express.json())

//Enable cors(Mildeware)
app.use(cors())

//Set static folder
app.use(express.static(path.join(__dirname,'public')))

//Routes
app.use('/api/v1/stores',require('./routes/stores'))

const PORT  = process.env.PORT || 5000

app.listen(PORT,()=>
console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)