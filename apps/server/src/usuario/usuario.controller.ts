import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario, TipoUsuario } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

type userType = Usuario & { tipoUsuario: TipoUsuario };

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async obtenerTodos(): Promise<{ data: userType[] }> {
    const usuarios = await this.usuarioService.obtenerTodos();
    return { data: usuarios };
  }

  //Endpoint create user
  @Post()
  createUser(@Body() data: CreateUserDto): Promise<Usuario> {
    return this.usuarioService.createUser(data);
  }

  // Endpoint for updateUser
  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUserDto,
  ): Promise<Usuario> {
    return this.usuarioService.updateUser(id, data);
  }

  //Endpoint to set inactive
  @Patch(':id/baja')
  setUserInactive(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    return this.usuarioService.setInactive(id);
  }
}
