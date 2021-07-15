import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Organization } from "./organization.entity";

@Entity()
export class Membership {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @Column()
  organizationId!: number;

  @ManyToOne(() => User, user => user.memberships)
  user!: User;

  @ManyToOne(() => Organization, organization => organization.memberships)
  organization!: Organization;
}