import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || 'supersecretjwtkey'; // Usar variável de ambiente para a chave secreta

export class AuthService {
  async login(username: string, password: string): Promise<string | null> {
    // Em um cenário real, você buscaria o usuário no banco de dados e verificaria a senha.
    // Para este exemplo, usamos credenciais fixas.
    if (username === 'admin' && password === 'admin') {
      const token = jwt.sign({ username: username, role: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
      return token;
    }
    return null;
  }
}
