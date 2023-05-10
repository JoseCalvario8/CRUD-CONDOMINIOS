import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CondominiosService } from './condominios.service';
import { CreateCondominioDto } from './dto/create-condominio.dto';
import { UpdateCondominioDto } from './dto/update-condominio.dto';

@Controller('condominios')
export class CondominiosController {
  constructor(private readonly condominiosService: CondominiosService) {}

  @Post()
  create(@Body() createCondominioDto: CreateCondominioDto) {
    return this.condominiosService.create(createCondominioDto);
  }

  @Get()
  findAll() {
    return this.condominiosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.condominiosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCondominioDto: UpdateCondominioDto) {
    return this.condominiosService.update(id, updateCondominioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.condominiosService.remove(id);
  }
}
