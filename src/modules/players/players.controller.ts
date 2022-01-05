import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateOrUpdatePlayerDTO } from './dtos/create-update-player.dto';
import { Player } from './interfaces/player.interface';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async createOrUpdatePlayer(
    @Body() createOrUpdatePlayer: CreateOrUpdatePlayerDTO,
  ): Promise<void> {
    const { name, email, phone } = createOrUpdatePlayer;

    this.playersService.createOrUpdatePlayer({ name, email, phone });
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
