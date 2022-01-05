import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

class UpdatePlayerDTO {
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

export { UpdatePlayerDTO };
