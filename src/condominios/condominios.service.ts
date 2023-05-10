import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCondominioDto } from './dto/create-condominio.dto';
import { UpdateCondominioDto } from './dto/update-condominio.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Condominio } from './entities/condominio.entity';
import { Model, Types } from 'mongoose';
import { CondominiosDocument } from './schemas/condominios.schema';
import { types } from 'util';

@Injectable()
export class CondominiosService {
  constructor(
    @InjectModel(Condominio.name)
    private CondominiosModule: Model<CondominiosDocument>,
  ) {}
  async create(createCondominioDto: CreateCondominioDto) {
    const condominio = new this.CondominiosModule({
      ...createCondominioDto,
    });
    try {
      const condominio1 = await condominio.save();
      return condominio1;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }

  async findAll() {
    return await this.CondominiosModule.find({});
  }

  async findOne(id: string) {
    const condominio = await this.CondominiosModule.findById(id);
    if (!condominio) {
      throw new NotFoundException(
        `Condominio con el id ${id} no fue encontrado`,
      );
    }
    return condominio;
  }

  async update(id: string, updateCondominioDto: UpdateCondominioDto) {
    return await this.CondominiosModule.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      { ...updateCondominioDto },
    );
  }

  async remove(id: string) {
    return await this.CondominiosModule.findOneAndDelete({ _id: new Types.ObjectId(id) });
  }
}
