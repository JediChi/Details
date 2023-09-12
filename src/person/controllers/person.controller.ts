import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Injectable,
  Param,
  Post,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { PersonService } from 'src/person/services/person.service';
import { CreatePersonRequestDto } from '../dto/request/create.person.request.dto';
import { IPerson } from 'src/person/interfaces/person.interface';
import { ResponseData } from 'src/person/dto/response/data.response.dto';

@Controller('api')
@Injectable()
export class PersonController {
  constructor(private person_service: PersonService) {}

  @Post()
  async create_person(
    @Body() person: CreatePersonRequestDto,
  ): Promise<ResponseData<IPerson>> {
    const result = await this.person_service.create_person(person);

    return {
      status: HttpStatus.CREATED,
      message: 'User account created successfully',
      data: result,
    };
  }

  @Get('/:user_id')
  async get_user(
    @Param() params: { user_id: number },
  ): Promise<ResponseData<IPerson>> {
    const result = await this.person_service.find_by_id(params.user_id);
    return {
      status: HttpStatus.OK,
      message: 'User data retrieved successfully',
      data: result,
    };
  }

  @Put('/:user_id')
  async update_user(
    @Body() person: CreatePersonRequestDto,
    @Param() params: { user_id: number },
  ): Promise<ResponseData<IPerson>> {
    const update_person = await this.person_service.update_user_data(
      person,
      params.user_id,
    );

    return {
      status: HttpStatus.OK,
      message: 'User data updated successfully',
      data: update_person
    };
  }

  @Delete('/:user_id')
  async delete_user(
    @Param() params: { user_id: number },
  ): Promise<ResponseData<null>> {
    await this.person_service.delete_by_id(params.user_id);
    console.log(HttpStatus.NO_CONTENT)
    return {
      status: HttpStatus.NO_CONTENT,
      message: 'User removed successfully',
      data: null,
    };
  }
}
