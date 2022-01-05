import { Document } from 'mongoose';

interface Player extends Document {
  readonly phone: string;
  readonly email: string;
  readonly name: string;
  readonly ranking: string;
  readonly positionOnRanking: number;
  readonly urlPlayerPhoto: string;
}

export { Player };
