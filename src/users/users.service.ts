import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService){}  
  create(data: CreateUserDto) {
    return this.prisma.user.create({data});
  }

  findAll() {  
    return this.prisma.user.findMany();
  }

  findOne(username:string) { 
    return this.prisma.user.findUnique({where: {username}});
  }

  update(username:string, data: UpdateUserDto) {
    return this.prisma.user.update({data, where: {username}});
  }

  remove(username:string) {
    return this.prisma.user.delete({where: {username}});
  }
}
