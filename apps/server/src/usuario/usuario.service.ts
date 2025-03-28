import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Usuario, TipoUsuario, Estado } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async obtenerTodos(): Promise<(Usuario & { tipoUsuario: TipoUsuario })[]> {
    const usuarios = await this.prisma.usuario.findMany({
      include: { tipoUsuario: true },
    });
    return usuarios;
  }

  async createUser(data: CreateUserDto): Promise<Usuario> {
    const hashedPass: string = await bcrypt.hash(data.password, 10);

    return await this.prisma.usuario.create({
      data: {
        nombre: data.nombre,
        correo: data.correo,
        password: hashedPass,
        tipoUsuarioId: data.tipoUsuarioId,
        estado: Estado.ACTIVO,
      },
    });
  }

  async updateUser(id: number, data: UpdateUserDto): Promise<Usuario> {
    return await this.prisma.usuario.update({
      where: { id },
      data,
    });
  }

  async setInactive(id: number): Promise<Usuario> {
    return this.prisma.usuario.update({
      where: { id },
      data: {
        estado: Estado.INACTIVO,
      },
    });
  }
}
