import { Product } from "./product.model";

export class ProductRepository {
    
  queryProducts(): Product[] {
    return [
      {
        id: 1,
        name: "something from the storage",
        price: 100.00
      }
    ]
  }
}
