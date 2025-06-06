const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

//
const CursoRoutes = require('./src/routes/CursoRoutes');
const UsuarioRoutes = require('./src/routes/UsuarioRoutes');
const AuthRoutes  = require('./src/routes/AuthRoutes');
const Inscricao = require('./src/routes/InscricaoRoutes');

//
const app = express();
app.use(express.json());
app.use('/cursos', CursoRoutes);
app.use('/usuarios', UsuarioRoutes)
app.use('/autenticacao', AuthRoutes )
app.use('/inscricao', Inscricao)

//const cors = require('cors');
//app.use(cors());

//
sequelize.sync().then( () => {
    console.log("Bonco de dados ok.");
    const port = process.env.PORT;
    const HOSTNAME = process.env.HOSTNAME;
    app.listen(port, HOSTNAME, () => console.log(`Listening on http://localhost:${port}`));
}).catch(err => console.error("Erro ao conectar com o Banco de Dados", err));
