import { Entity } from "typeorm";

@Entity
export class User {
  @Entity.PrimaryGeneratedColumn()
  id: number;

  @Entity.Column()
  name: string;

  @Entity.Column()
  email: string;

  @Entity.Column()
  password: string;

  @Entity.Column()
  createdAt: Date;

  @Entity.Column()
  updatedAt: Date;
}
