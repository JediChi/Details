import {
    AutoIncrement,
    Column,
    PrimaryKey,
    Table,
  } from 'sequelize-typescript';
  import { PersonStatus } from 'src/person/interfaces/person.interface';
  import { GenderOptions } from 'src/person/interfaces/person.interface';
  import { Auditable } from 'src/person/models/auditable.model';
  
  @Table({
    tableName: 'person',
  })
  export class Person extends Auditable {
    @PrimaryKey
    @AutoIncrement
    @Column({
      allowNull: false,
    })
    id: number;
  
    @Column({
      allowNull: false,
      unique: true,
    })
    name: string;
  
    @Column({
      allowNull: true,
      unique: true,
    })
    email: string;
  
    @Column({
      allowNull: true,
      unique: true,
    })
    phone_number: number;
  
    @Column({
      allowNull: true,
      defaultValue: "rather not say",
    })
    gender: GenderOptions;
  
    @Column({
      allowNull: true,
    })
    password: string;
  
    @Column({
      allowNull: true,
      defaultValue: null,
    })
    dob: Date;
  
    @Column({
      allowNull: false,
      defaultValue: 'active',
    })
    status: PersonStatus;
  
    @Column({
      allowNull: true,
    })
    active?: boolean;
  }
  