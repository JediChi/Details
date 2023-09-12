import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { logger } from 'src/loggers/pino.logger';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { ValidationFilter } from 'src/filters/validation.filter';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { ValidationException } from 'src/exception/validation.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new ValidationFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
      stopAtFirstError: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map((error) => {
          return {
            [`${error.property}`]: {
              error: `${error.property} has wrong value ${error.value}.`,
              message: Object.values(error.constraints).join(''),
            },
          };
        });
        return new ValidationException(messages);
      },
    }),
  );

  try {
    const PORT = process.env.PORT || 3006;
    await app.listen(PORT);
    logger.info(`Started on port ${PORT}.`);
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
}
bootstrap().then();
