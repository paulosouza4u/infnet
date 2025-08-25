import { Book, CreateBookDTO, UpdateBookDTO } from '../dtos/book.dto';
import { BookRepository } from '../repositories/book.repository';
import { v4 as uuidv4 } from 'uuid';

export class BookService {
  constructor(private bookRepository: BookRepository) {}

  async getAllBooks(): Promise<Book[]> {
    return this.bookRepository.findAll();
  }

  async getBookById(id: string): Promise<Book | undefined> {
    return this.bookRepository.findById(id);
  }

  async createBook(createBookDto: CreateBookDTO): Promise<Book> {
    const newBook: Book = {
      id: uuidv4(),
      ...createBookDto,
    };
    return this.bookRepository.create(newBook);
  }

  async updateBook(id: string, updateBookDto: UpdateBookDTO): Promise<Book | undefined> {
    const existingBook = await this.bookRepository.findById(id);
    if (!existingBook) {
      return undefined;
    }
    return this.bookRepository.update(id, updateBookDto);
  }

  async deleteBook(id: string): Promise<boolean> {
    return this.bookRepository.delete(id);
  }
}
