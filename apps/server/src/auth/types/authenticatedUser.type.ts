import { Usuario } from '@prisma/client';

export type AuthenticatedUser = Omit<Usuario, 'password'>;
