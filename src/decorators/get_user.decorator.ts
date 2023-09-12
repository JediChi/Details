import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IPerson } from 'src/person/interfaces/person.interface';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): IPerson => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
