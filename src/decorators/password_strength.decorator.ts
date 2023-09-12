import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PASSWORD_REGEX } from 'src/helpers/password.helper';

@ValidatorConstraint({ async: true })
export class PasswordStrengthConstraint
  implements ValidatorConstraintInterface
{
  async validate(value: string) {
    return PASSWORD_REGEX.test(value) && value.length > 7;
  }
}

export function PasswordStrength(option?: ValidationOptions) {
  return (obj: object, property_name: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: property_name,
      options: option,
      constraints: [],
      validator: PasswordStrengthConstraint,
      async: true,
    });
  };
}
