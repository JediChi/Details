import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'src/person/interfaces/person.interface';

export class ValidationException extends BadRequestException {
  constructor(public error: ValidationError[]) {
    super();
  }
}
