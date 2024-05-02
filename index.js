const express = require('express');
const app = express();
const PORT = 3001

app.use(express.json())

app.use('/users', require('./routes/users'));
app.use('/orders', require('./routes/orders'));
app.use('/products', require('./routes/products'));



app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
