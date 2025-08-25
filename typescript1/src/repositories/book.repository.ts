import { Book } from '../dtos/book.dto';
import { promises as fs } from 'fs';
import * as path from 'path';

const DATA_FILE = path.join(__dirname, '../../books.json');

export class BookRepository {
  private async readBooks(): Promise<Book[]> {
    try {
      const data = await fs.readFile(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        await fs.writeFile(DATA_FILE, '[]', 'utf-8');
        return [];
      }
      throw error;
    }
  }

  private async writeBooks(books: Book[]): Promise<void> {
    await fs.writeFile(DATA_FILE, JSON.stringify(books, null, 2), 'utf-8');
  }

  async findAll(): Promise<Book[]> {
    return this.readBooks();
  }

  async findById(id: string): Promise<Book | undefined> {
    const books = await this.readBooks();
    return books.find(book => book.id === id);
  }

  async create(book: Book): Promise<Book> {
    const books = await this.readBooks();
    books.push(book);
    await this.writeBooks(books);
    return book;
  }

  async update(id: string, updatedBook: Partial<Book>): Promise<Book | undefined> {
    const books = await this.readBooks();
    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
      return undefined;
    }

    books[index] = { ...books[index], ...updatedBook };
    await this.writeBooks(books);
    return books[index];
  }

  async delete(id: string): Promise<boolean> {
    const books = await this.readBooks();
    const initialLength = books.length;
    const filteredBooks = books.filter(book => book.id !== id);

    if (filteredBooks.length === initialLength) {
      return false; // No book was deleted
    }

    await this.writeBooks(filteredBooks);
    return true;
  }
}
