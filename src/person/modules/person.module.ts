import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { PersonService } from 'src/person/services/person.service';
import { Person } from 'src/person/models/person.model';
import { PersonController } from 'src/person/controllers/person.controller';

@Module({
  imports: [SequelizeModule.forFeature([Person])],
  providers: [PersonService],
  exports: [PersonService],
  controllers: [PersonController],
})
export class PersonModule {}
