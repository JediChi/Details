import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as argon from 'argon2';

import { Person } from 'src/person/models/person.model';
import { CreatePersonRequestDto } from 'src/person/dto/request/create.person.request.dto';
import {
  IPerson,
} from 'src/person/interfaces/person.interface';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person)
    private person_model: typeof Person,
  ) {}

  async create_person(person: CreatePersonRequestDto): Promise<IPerson> {
    // const password = await argon.hash(person.password);
    const [result, created] = await this.person_model.findOrCreate({
      where: { name: person.name },
      defaults: {
        ...person,
      },
    });

    if (!created) {
      throw new BadRequestException('user already exist');
    }

    return {
      id: result.id,
      name: result.name,
    };
  }

  async update_user_data(
    user_data: CreatePersonRequestDto,
    user_id: number,
  ): Promise<IPerson> {
    await this.person_model.update(
      {
        ...user_data,
      },
      {
        where: { id: user_id },
      },
    );
    return await this.find_by_id(user_id);
  }

  async find_by_id(user_id: number): Promise<IPerson> {
    return await this.person_model.findOne({ where: { id: user_id } });
  }

  async delete_by_id(user_id: number) {
    await this.person_model.destroy({
      where: {
        id: user_id,
      },
    });
  }
}
