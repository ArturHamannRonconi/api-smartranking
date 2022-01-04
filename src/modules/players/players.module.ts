import { Module } from '@nestjs/common';
import { CreatePlayerController } from './controllers/create-player.controller';

@Module({
  controllers: [CreatePlayerController],
})
export class PlayersModule {}
