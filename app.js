const express = require('express')
const app = express()

app.get('/',(request,response)=>
{
    response.send("its working")

})


app.listen (3500)