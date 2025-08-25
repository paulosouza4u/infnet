import { Router } from 'express';
import { BookController } from '../controllers/book.controller';
import { BookRepository } from '../repositories/book.repository';
import { BookService } from '../services/book.service'; // Importar BookService
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validation.middleware';
import { CreateBookSchema, UpdateBookSchema } from '../dtos/book.dto';

const router = Router();
const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository); // Instanciar BookService com BookRepository
const bookController = new BookController(bookService); // Passar BookService para BookController

// Todas as rotas de negócio deverão estar protegidas e autorizadas para 'admin'
router.post('/', authenticate, authorize(['admin']), validate(CreateBookSchema), (req, res) => bookController.createBook(req, res));
router.get('/', authenticate, authorize(['admin']), (req, res) => bookController.getAllBooks(req, res));
router.get('/:id', authenticate, authorize(['admin']), (req, res) => bookController.getBookById(req, res));
router.put('/:id', authenticate, authorize(['admin']), validate(UpdateBookSchema), (req, res) => bookController.updateBook(req, res));
router.delete('/:id', authenticate, authorize(['admin']), (req, res) => bookController.deleteBook(req, res));

export default router;
