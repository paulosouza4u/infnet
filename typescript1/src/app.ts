import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Importar o cors
import { loggerMiddleware } from './middlewares/logger.middleware';
import authRoutes from './routes/auth.routes';
import bookRoutes from './routes/book.routes';

const app = express();

// Middlewares globais
app.use(bodyParser.json());
app.use(cors()); // Usar o middleware cors
app.use(loggerMiddleware);

// Rotas de autenticação
app.use('/auth', authRoutes);

// Rotas de livros
app.use('/books', bookRoutes);

// Middleware para tratamento de erros 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Middleware global de tratamento de erros
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

export default app;
