const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    console.log('Get request at root');
    res.send('OK!');
});

app.get('/contact-form', (req,res)=>{
    console.log('Got request for contact form');
    res.send('contact form');
})

app.listen(3000, ()=>{
    console.log('App listening on port 3000!');
})