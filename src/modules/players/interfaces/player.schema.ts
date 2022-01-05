import { Schema } from 'mongoose';

const playerSchema = new Schema(
  {
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    name: String,
    ranking: String,
    positionOnRanking: Number,
    urlPlayerPhoto: String,
  },
  {
    timestamps: true,
    collection: 'players',
  },
);

export { playerSchema };
