import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { config } from 'dotenv';
import { sequelize_config } from 'src/config/sequelize.config';
import { security_config } from 'src/config/security.config';
import { PersonModule } from 'src/person/modules/person.module';

config();

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [security_config],
      isGlobal: true,
      cache: true,
    }),
    SequelizeModule.forRoot(sequelize_config()),
    PersonModule
  ],
})
export class AppModule {}
