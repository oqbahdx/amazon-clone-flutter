const express = require('express')
const app = express()
const authRouter = require('./routes/auth/auth')
const mongoose = require('mongoose')
const port = process.env.port || 3000
const DB = "mongodb+srv://oqbah:1992dx@cluster1.nhtsuix.mongodb.net/?retryWrites=true&w=majority"
app.use(express.json())
app.use(authRouter)
mongoose.connect(DB).then(()=>{
console.log('connected to DB');
}).catch((e)=>{
  console.log('connection failed ' , e);
})

app.get('/',(req,res)=>{
    res.json(
        {
            "title":"amazon clone",
            "application":"flutter",
            "backend":"node js",
        }
    )
})


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})