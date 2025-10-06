require('dotenv').config() 
const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('hello world!')
})  
app.get('/login',(req,res)=>{
    res.send('<H1>I like dev</H1>')
})
const port=4000
app.listen(process.env.PORT,()=>{
    console.log(`example is running on port ${port}`)
})
//how do we dep