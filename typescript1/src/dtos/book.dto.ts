import { z } from 'zod';

export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  price: number;
}

export const CreateBookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  publisher: z.string().min(1, "Publisher is required"),
  price: z.number().positive("Price must be a positive number"),
});

export type CreateBookDTO = z.infer<typeof CreateBookSchema>;

export const UpdateBookSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  author: z.string().min(1, "Author is required").optional(),
  publisher: z.string().min(1, "Publisher is required").optional(),
  price: z.number().positive("Price must be a positive number").optional(),
});

export type UpdateBookDTO = z.infer<typeof UpdateBookSchema>;
