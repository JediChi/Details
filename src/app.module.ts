import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { config } from 'dotenv';
import { sequelize_config } from 'src/config/sequelize.config';

config();

@Module({
  imports: [
    SequelizeModule.forRoot(sequelize_config()),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
