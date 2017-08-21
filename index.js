const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    console.log('Get request at root');
    res.send('OK!');
});

app.listen(3000, ()=>{
    console.log('App listening on port 3000!');
})