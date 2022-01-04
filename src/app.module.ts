import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [ConfigModule, PlayersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
