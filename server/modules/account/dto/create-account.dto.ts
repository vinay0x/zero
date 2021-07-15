import { IsEmail, IsString, Min, MinLength } from "class-validator";
import { Match } from "server/decorators/match.decorator";

export class CreateAccountDto {
  @IsString()
  organization: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @Match("password")
  passwordConfirmation: string;
}
