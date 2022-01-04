import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { v4 as generateUUID } from 'uuid';

import { CreateOrUpdatePlayerDTO } from './dtos/create-update-player.dto';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService {
  private logger = new Logger();
  private playersRepository: Player[] = [];

  async createOrUpdatePlayer(
    createOrUpdatePlayer: CreateOrUpdatePlayerDTO,
  ): Promise<void> {
    const playerAlreadyExists = await this.findPlayerByEmail(
      createOrUpdatePlayer.email,
    );

    if (playerAlreadyExists)
      await this.updatePlayer(playerAlreadyExists, createOrUpdatePlayer);

    await this.createPlayer(createOrUpdatePlayer);
  }

  async findPlayers(): Promise<Player[]> {
    return this.playersRepository;
  }

  async findPlayerById(id: string): Promise<Player> {
    const playerExists = this.playersRepository.find((p) => p.id === id);
    if (!playerExists) throw new NotFoundException('Player not found!');

    return playerExists;
  }

  async deleteById(id: string) {
    const player = await this.findPlayerById(id);
    const playerIndex = this.playersRepository.indexOf(player);
    this.playersRepository.splice(playerIndex, 1);
  }

  private async findPlayerByEmail(email: string) {
    return this.playersRepository.find((p) => p.email === email);
  }

  private async updatePlayer(
    player: Player,
    createOrUpdatePlayer: CreateOrUpdatePlayerDTO,
  ): Promise<void> {
    const playerIndex = this.playersRepository.indexOf(player);
    this.playersRepository[playerIndex] = {
      ...player,
      ...createOrUpdatePlayer,
    };
  }

  private async createPlayer(
    createOrUpdatePlayer: CreateOrUpdatePlayerDTO,
  ): Promise<void> {
    const player: Player = {
      id: generateUUID(),
      ranking: 'F',
      positionOnRanking: 1000,
      urlPlayerPhoto: '',
      ...createOrUpdatePlayer,
    };

    this.playersRepository.push(player);
  }
}
