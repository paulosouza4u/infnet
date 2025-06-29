const express = require('express');
const sequelize = require('./config/database');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

//
const CursoRoutes = require('./src/routes/CursoRoutes');
const UsuarioRoutes = require('./src/routes/UsuarioRoutes');
const AuthRoutes  = require('./src/routes/AuthRoutes');

const RootRoutes = require('./src/routes/RootRoutes');

//
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(cookieParser());

//
app.use('/usuarios', UsuarioRoutes);
app.use('/login', AuthRoutes );

//
app.use('/cursos', CursoRoutes);
app.use('/', RootRoutes);

//
sequelize.sync().then( () => {
    console.log("Bonco de dados ok.");
    const port = process.env.PORT;
    const HOSTNAME = process.env.HOSTNAME;
    app.listen(port, HOSTNAME, () => console.log(`Listening on http://localhost:${port}`));
}).catch(err => console.error("Erro ao conectar com o Banco de Dados", err));
