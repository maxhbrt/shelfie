const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();


const controller = require('./controller');


let {
    CONNECTION_STRING
} = process.env;


const app = express();



massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('connected')
}).catch(error => {
    console.log('not connected', error);
});


app.get('/api/inventory', controller.getAll);
app.post('/api/product', controller.newProduct);
app.delete('/api/product/:id', controller.removeProduct);
app.get('/api/product/:id', controller.getProduct);

app.listen(9001, () => {
    console.log('server is running')
})