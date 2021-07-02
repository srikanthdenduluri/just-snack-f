// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NextDayDelivery, Wallet, Subscribe, Product } = initSchema(schema);

export {
  NextDayDelivery,
  Wallet,
  Subscribe,
  Product
};