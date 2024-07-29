import { PrismaService } from './../db/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private readonly PrismaService: PrismaService) {}

  create(createProdutoDto: CreateProdutoDto) {
    return this.PrismaService.produto.create({
      data: createProdutoDto,
    });
  }

  findAll() {
    return this.PrismaService.produto.findMany();
  }

  findOne(id: number) {
    return this.PrismaService.produto.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.PrismaService.produto.update({
      where: { id },
      data: updateProdutoDto,
    });
  }

  remove(id: number) {
    return this.PrismaService.produto.delete({
      where: { id },
    });
  }
}
