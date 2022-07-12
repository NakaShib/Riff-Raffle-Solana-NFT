import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
  // ['CU7ZkyUfKnxYjUY1Lo71sez2D1AJLqGoTbWtuUAst1qq', { name: 'Simple Raffle' }],
  // ['Aq5cZhbR28TYqt9SVAopGQVq5Q64BLmZE3kURxCHuv3U', { name: 'Second Raffle' }],
  // ['C8MksYdZq3jasJoLkuZN6frT9TuZ2STzCkCCDqnrmKhv', { name: 'Third Raffle' }],
  // ['3kTRXdm2xKejFkNfKxw88GV2cGZaASfkjysJ48fwNsYJ', { name: 'SOL Raffle' }],
  // ['HhppMJ3x9cdNnXPZKJTR8zCzWEmNx5RGLRgx94nt8AKQ', { name: 'SOL Raffle 2' }],
  // ['5Po1nyZ9UAQzjS2KdV8b6Lwk3y9hwxrL1po2dvfn6dr9', { name: 'MEME Raffle' }],
  // [
  //   '9FoUjfUpWwhHYaGKM9G5eYab7qow3oWqdo2G5Ehj3h5L',
  //   {
  //     name: 'Oh my dRaffle',
  //     overviewImageUri: '/resources/001-mainnet-launch.gif',
  //     alternatePurchaseMints: [
  //       new PublicKey('So11111111111111111111111111111111111111112'),
  //     ],
  //   },
  // ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    'B1o85io2sg2fe8cCyAZzs1P5mV1FEqwXEMxzdQmPBFqS',
    {
      name: 'HIGH ROLLER RAFFLE',
      overviewImageUri: '/resources/HR-SAMPLE.png',
    },
  ],
  [
    'HVLCQedjPQZNVAxqF1yRaiMS1x38u214n9iCHpU9Ba5F',
    {
      name: 'HIGH JUICE RAFFLE',
      overviewImageUri: '/resources/JUICELOGO.png',
    },
  ],
  [
    'FRGonS74qLUgUZKsqKwLxLumX4qyudgn4e9B17mm6991',
    {
      name: 'HIGH JUICE #120',
      overviewImageUri: '/resources/JUICELOGO.png',
    },
  ],
  [
    'CxTfR4vapzcyhyGrDQaPDxt6Tw6xtkEK5NdcFVKT5H4p',
    {
      name: 'HR #5',
      overviewImageUri: '/resources/HR-SAMPLE.png',
    },
  ],
  [
    '5XBgBqQpZm824mJdS6oGidUBSPQrBQ5wCmMxPVqFQrw5',
    {
      name: 'HR #5',
      overviewImageUri: '/resources/HR-SAMPLE.png',
    },
  ],
  [
    '6JoAK9mmB5fgJmSTZdYSkR7EY3HQPmUMUqTtJEzprQ7i',
    {
      name: 'NEW RAFFLE222',
      overviewImageUri: '/resources/raffleBG.png',
    },
  ],
  [
    '7j1HKPQKfzwqw2toHB9Px3Tw75GVsPpfNDTRhQh8zfg7',
    {
      name: 'NEW RAFFLE111',
      overviewImageUri: '/resources/rafflebg.png',
    },
  ],
]);

export const RAFFLES_WHITELIST = TESTING ? testWhitelist : prodWhitelist;
