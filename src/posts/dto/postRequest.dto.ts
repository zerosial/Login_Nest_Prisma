import { Request } from 'express';

interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
  username: string;
  role: 'USER' | 'ADMIN';
}

export interface CustomRequest extends Request {
  user: User;
}
