import { IsEmail, IsString, Min, MinLength } from 'class-validator';
import { Match } from 'server/decorators/match.decorator';

export class LoginDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
