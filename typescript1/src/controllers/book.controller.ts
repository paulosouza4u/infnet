import { Request, Response } from 'express';
import { BookService } from '../services/book.service';
import { CreateBookDTO, UpdateBookDTO } from '../dtos/book.dto';

export class BookController {
  constructor(private bookService: BookService) {}

  async getAllBooks(req: Request, res: Response): Promise<void> {
    try {
      const books = await this.bookService.getAllBooks();
      res.status(200).json(books);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getBookById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const book = await this.bookService.getBookById(id);
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async createBook(req: Request, res: Response): Promise<void> {
    try {
      // DTO validation will be handled by a middleware later
      const createBookDto: CreateBookDTO = req.body;
      const newBook = await this.bookService.createBook(createBookDto);
      res.status(201).json(newBook);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateBook(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      // DTO validation will be handled by a middleware later
      const updateBookDto: UpdateBookDTO = req.body;
      const updatedBook = await this.bookService.updateBook(id, updateBookDto);
      if (updatedBook) {
        res.status(200).json(updatedBook);
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteBook(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deleted = await this.bookService.deleteBook(id);
      if (deleted) {
        res.status(204).send(); // No content
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
