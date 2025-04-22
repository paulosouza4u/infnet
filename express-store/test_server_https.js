//
// No pronpt do container execute o servidor HTTPS: node server.js
// Agora você pode acessar o servidor em https://localhost.
//
const fs = require("fs");
const https = require("https");
const express = require("express");

const app = express();

// Caminho dos certificados
const CERTS_DIR = "/certs";
const options = {
    key: fs.readFileSync(`${CERTS_DIR}/key.pem`),
    cert: fs.readFileSync(`${CERTS_DIR}/cert.pem`),
};

app.get("/", (req, res) => {
    res.send("Servidor HTTPS está rodando!");
});

// Força HTTPS
const httpsServer = https.createServer(options, app);
httpsServer.listen(443, () => {
    console.log("Servidor rodando em https://localhost");
});
