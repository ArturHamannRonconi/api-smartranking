import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreatePlayerDTO } from './dtos/create-player.dto';
import { UpdatePlayerDTO } from './dtos/update-player.dto';
import { Player } from './interfaces/player.interface';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createOrUpdatePlayer(
    @Body() { name, email, phone }: CreatePlayerDTO,
  ): Promise<void> {
    await this.playersService.createPlayer({ name, email, phone });
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async updatePlayer(
    @Body() updatePlayer: UpdatePlayerDTO,
    @Param('id') id: string,
  ): Promise<void> {
    await this.playersService.updatePlayer(updatePlayer, id);
  }

  @Get()
  async findPlayers(): Promise<Player[]> {
    return this.playersService.findPlayers();
  }

  @Get(':id')
  async findPlayerById(@Param('id') id: string): Promise<Player> {
    return this.playersService.findPlayerByid(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return this.playersService.deleteByid(id);
  }
}
