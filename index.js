const express = require('express');
const app = express();

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



app.listen(3000, ()=>{
    console.log('App listening on port 3000!');
})