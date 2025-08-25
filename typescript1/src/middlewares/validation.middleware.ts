import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const validate = (schema: z.Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const zodError = error as z.ZodError; // Coerção explícita para z.ZodError
        return res.status(400).json({
          message: 'Validation error',
          errors: zodError.errors.map((err: z.ZodIssue) => ({
            path: err.path,
            message: err.message,
          })),
        });
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
