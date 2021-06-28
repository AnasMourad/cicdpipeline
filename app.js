const express = require('express');
const app = express();
const port= 8088;
app.get('/hello', (req, res)=>{
    res.send('<h1>Express demo app</h1> Message: Success<p>Version 1.0</p>');
});

app.get('/products', (req, res)=>{
    res.send([
        {
            productId: '101',
            price: 100
        },
        {
            productId: '102',
            price: 150
        }
    ]);
});


app.listen(port, ()=>{
    console.log("App is up and running");
});