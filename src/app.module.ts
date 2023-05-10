import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CondominiosModule } from './condominios/condominios.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CondominiosModule,MongooseModule.forRoot("mongodb://localhost/condominios")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
