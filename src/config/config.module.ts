import { Module } from '@nestjs/common';
import { enviroment } from './enviroment';
import { mongooseModule } from './mongoose';
@Module({
  imports: [enviroment, mongooseModule],
  exports: [enviroment, mongooseModule],
})
export class ConfigModule {}
