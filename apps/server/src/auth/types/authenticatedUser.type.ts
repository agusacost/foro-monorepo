import { TipoUsuario, Usuario } from '@prisma/client';

export type AuthenticatedUser = Omit<Usuario, 'password'> & {
  tipoUsuario: TipoUsuario;
};

export enum Role {
  Admin = 'Admin',
  Student = 'student',
}
