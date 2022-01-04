import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { PlayersModule } from './modules/players/players.module';

@Module({
  imports: [ConfigModule, PlayersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
