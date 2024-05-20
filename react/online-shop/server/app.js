const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const rootRoutes = require('./routes/root/root')

app.listen(4000, () => {
    console.log('Server Is Running In Port 4000')
})

mongoose.connect('mongodb://localhost:27017/comercial', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(()=> {
    console.log('////////////////////////////////////////////////')
    console.log("DB Connection Successfull")
}).catch((err)=> {
    console.log(err.message)
})

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ['GET', 'POST'],
        credentials: true
    })
)

app.use(cookieParser())
app.use(express.json())
app.use('/', rootRoutes)

