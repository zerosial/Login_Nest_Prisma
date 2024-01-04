import { Post, Role } from '@prisma/client';

export class UserResponseDto {
  email: string;
  firstname?: string;
  lastname?: string;
  role: Role;
  posts?: [Post] | null;
}
