import { Module } from '@nestjs/common';
import { CondominiosService } from './condominios.service';
import { CondominiosController } from './condominios.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Condominio } from './schemas/condominios.schema';
import { CondominiosSchema } from './schemas/condominios.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Condominio.name,schema: CondominiosSchema}])],
  controllers: [CondominiosController],
  providers: [CondominiosService]
})
export class CondominiosModule {}
