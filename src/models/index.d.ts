import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class NextDayDelivery {
  readonly id: string;
  readonly user_id?: number;
  readonly product_id?: number;
  readonly next_id?: number;
  readonly should_delivery_flag?: string;
  readonly date_added?: string;
  readonly date_modified?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<NextDayDelivery>);
  static copyOf(source: NextDayDelivery, mutator: (draft: MutableModel<NextDayDelivery>) => MutableModel<NextDayDelivery> | void): NextDayDelivery;
}

export declare class Wallet {
  readonly id: string;
  readonly user_id?: number;
  readonly balance?: number;
  readonly date_added?: string;
  readonly date_modified?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Wallet>);
  static copyOf(source: Wallet, mutator: (draft: MutableModel<Wallet>) => MutableModel<Wallet> | void): Wallet;
}

export declare class Subscribe {
  readonly id: string;
  readonly full_name?: string;
  readonly email?: string;
  readonly mobile?: string;
  readonly area?: string;
  readonly address?: string;
  readonly user_id?: number;
  readonly product_id?: number;
  readonly date_added?: string;
  readonly date_modified?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Subscribe>);
  static copyOf(source: Subscribe, mutator: (draft: MutableModel<Subscribe>) => MutableModel<Subscribe> | void): Subscribe;
}

export declare class Product {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly cost?: string;
  readonly daily_cost?: string;
  readonly product_id?: number;
  readonly date_added?: string;
  readonly date_modified?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}