import { IsNotEmpty, IsString, IsEmail, IsOptional, IsNumber } from 'class-validator';
import { IsValidEmail } from 'src/decorators/is_valid_email.decorator';
import { PasswordStrength } from 'src/decorators/password_strength.decorator';

export class CreatePersonRequestDto {
  
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsOptional()
  @IsValidEmail()
  email: string;

  @IsOptional()
  @IsString()
  @PasswordStrength()
  password: string;

  @IsOptional()
  @IsNumber()
  phone_number: number;

}
