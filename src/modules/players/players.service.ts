import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePlayerDTO } from './dtos/create-player.dto';
import { UpdatePlayerDTO } from './dtos/update-player.dto';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel('player') private readonly playerRepository: Model<Player>,
  ) {}

  async createPlayer({ name, email, phone }: CreatePlayerDTO): Promise<void> {
    const playerAlreadyExists = await this.playerRepository.exists({
      $or: [{ email }, { phone }],
    });

    if (playerAlreadyExists)
      throw new ConflictException('Player already exists!');

    await this.playerRepository.create({ name, email, phone });
  }

  async updatePlayer(
    updatePlayer: UpdatePlayerDTO,
    _id: string,
  ): Promise<void> {
    await this.playerRepository.updateOne({ _id }, { $set: updatePlayer });
  }

  async findPlayers(): Promise<Player[]> {
    return this.playerRepository.find();
  }

  async findPlayerByid(_id: string): Promise<Player> {
    const playerExists = await this.playerRepository.findById(_id);
    if (!playerExists) throw new NotFoundException('Player not found!');

    return playerExists;
  }

  async deleteByid(_id: string): Promise<void> {
    await this.playerRepository.deleteOne({ _id });
  }
}
