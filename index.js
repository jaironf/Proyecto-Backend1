const express = require('express');
const app = express();
const PORT = 3001
const { typeError } = require('./middleware/errors');

app.use(express.json())

app.use('/users', require('./routes/users'));
app.use('/orders', require('./routes/orders'));

//Products
app.use('/products', require('./routes/products'));
app.use('/id/:id', require('./routes/products'));
app.use('/id/:id', require('./routes/products'));
app.use('/id/:id', require('./routes/products'));
app.use('/name/:name', require('./routes/products'));
app.use('/price/:price', require('./routes/products'));
app.use('/price/', require('./routes/products'));

//Categories
app.use('/category', require('./routes/categories'));
app.use('/category', require('./routes/categories'));
app.use('/category', require('./routes/categories'));
app.use('/categories', require('./routes/categories'));
app.use('/id/:id', require('./routes/categories'));
app.use('/name/:name', require('./routes/categories'));


app.use(typeError)

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
