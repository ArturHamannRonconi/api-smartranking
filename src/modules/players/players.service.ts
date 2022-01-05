import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateOrUpdatePlayerDTO } from './dtos/create-update-player.dto';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel('player') private readonly playerRepository: Model<Player>,
  ) {}

  async createOrUpdatePlayer({
    email,
    name,
    phone,
  }: CreateOrUpdatePlayerDTO): Promise<void> {
    const playerAlreadyExists = await this.playerRepository
      .findOne({ email })
      .exec();

    if (playerAlreadyExists)
      await this.playerRepository.updateOne(
        { email },
        { $set: { name, phone } },
      );

    await this.playerRepository.create({
      email,
      name,
      phone,
    });
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
