const express = require('express')

const app = express()
const port = 1433

app.get('/',(req,res)=>{
  res.send('hello')
})

app.listen(port,()=>{
  console.log(`server running on port ${port}`)
})