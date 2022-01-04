import { ConfigModule } from '@nestjs/config';

const enviroment = ConfigModule.forRoot();

export { enviroment };
