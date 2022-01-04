import { Module } from '@nestjs/common';
import { enviroment } from './enviroment';

@Module({
  imports: [enviroment],
  exports: [enviroment],
})
export class ConfigModule {}
