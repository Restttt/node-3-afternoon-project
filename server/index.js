const express = require('express');
require('dotenv').config();
const massive = require('massive');
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

const productC = require('./controllers/productController');

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db is set');
}).catch(err => console.log("we have an err", err));

app.get('/api/products', productC.getAll);
app.get('/api/products/:id', productC.getOne);
app.put('/api/products/:id', productC.update);
app.post('/api/products', productC.create);
app.delete('/api/products/:id', productC.delete);


app.listen(SERVER_PORT, () => console.log(`we are listening at port: ${SERVER_PORT}`));