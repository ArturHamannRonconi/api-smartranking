interface Player {
  readonly _id: string;
  readonly phone: string;
  readonly email: string;
  readonly name: string;
  readonly ranking: string;
  readonly positionOnRanking: number;
  readonly urlPlayerPhoto: string;
}

export { Player };
