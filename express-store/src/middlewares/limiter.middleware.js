const rateLimit = require('express-rate-limit');
require('dotenv').config();

const minutos = parseInt(process.env.RATE_LIMIT_MINUTOS, 10);
const quantidade = parseInt(process.env.RATE_LIMIT_QUANTIDADE, 10);

const limiter = rateLimit({
    windowMs: minutos * 60 * 1000,
    max: quantidade,
    message: "Muitas requisições deste IP. Tente novamente mais tarde",
    standardHeaders: true,
    legacyHeaders: false
})

module.exports = {
    limiter
};