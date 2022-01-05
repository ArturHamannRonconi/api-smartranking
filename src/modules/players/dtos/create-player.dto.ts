import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

class CreatePlayerDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;
}

export { CreatePlayerDTO };
