import { IAuditable } from 'src/person/interfaces/auditable.interface';

export type PersonStatus = 'blocked' | 'disabled' | 'active' | 'inactive';

export interface IPerson extends IAuditable {
  id?: number;
  name: string;
  email?: string;
  password?: string;
  gender?: GenderOptions;
  dob?: Date;
  phone_number?: number;
  status?: PersonStatus;
  active?: boolean;
}

export interface IOptions {
  expiresIn?: string;
}

export type SecurityConfig = {
  jwt_secret: string;
};

export type GenderOptions = 'male' | 'female' | 'others';

export interface ValidationError {
  [x: string]: any;
  // error: string;
  // message: string;
}

