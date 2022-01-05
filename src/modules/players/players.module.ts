import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { playerSchema } from './interfaces/player.schema';

const playerRepositoryRegistry = MongooseModule.forFeature([
  { name: 'player', schema: playerSchema },
]);

@Module({
  imports: [playerRepositoryRegistry],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
