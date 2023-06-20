const express = require("express");
// Instatiate express app
const app =express()
// Define server port
const port =3000
//Create a default route
app.get('/', (req, res) => {
    res.send('Express +Typescript Server')
    
})
// Start listening to the requests on the defined port

app.listen(port)