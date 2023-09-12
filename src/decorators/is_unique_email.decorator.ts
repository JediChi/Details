import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Person } from 'src/person/models/person.model';

@ValidatorConstraint({ async: true })
export class IsUniqueEmailConstraint implements ValidatorConstraintInterface {
  async validate(value: string) {
    const user = await Person.findOne({
      where: { email: value },
    });
    return !!!user;
  }

  defaultMessage(args: ValidationArguments) {
    return `This email address already exists`;
  }
}

export function IsUniqueEmail(option?: ValidationOptions) {
  return (obj: object, property_name: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: property_name,
      options: option,
      constraints: [],
      validator: IsUniqueEmailConstraint,
      async: true,
    });
  };
}
