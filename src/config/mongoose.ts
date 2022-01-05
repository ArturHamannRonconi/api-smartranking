import { MongooseModule } from '@nestjs/mongoose';

const { MONGO_URL } = process.env;
const mongooseModule = MongooseModule.forRoot(MONGO_URL);

export { mongooseModule };
