const express = require('express');
let bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('Got request at', new Date());
    next();
})


app.get('/', (req, res)=>{
    console.log('Get request at root');
    res.send('OK!');
});

app.get('/contact-form', (req,res)=>{
    console.log('Got request for contact form');
    res.send('contact form');
});

app.get('/provinces', (req, res)=>{

    let provinces = [
        { name: "กรุงเทพมหานคร" },
        { name: "เชียงใหม่" },
        { name: "ขอนแก่น" }
    ];

    res.json(provinces);

});

app.post('/feedback', (req,res)=>{
    console.log('Got POST request');
    res.send('feedback');
})


app.listen(3000, ()=>{
    console.log('App listening on port 3000!');
})