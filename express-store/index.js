require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const userRoutes = require('./src/routes/users.routes');
const productRoutes = require('./src/routes/products.routes');

app.use(express.json());
app.use(cors())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/users', userRoutes);
app.use('/products', productRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
