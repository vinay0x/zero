import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateAccountDto {
  @IsString()
  organization: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

}
