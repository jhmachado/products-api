import {ProductRepository} from "./product.repository";

export class ProductController {

  constructor(private repository: ProductRepository) {}

  queryProducts(): string {
    const productsList = this.repository.queryProducts();
    return JSON.stringify(productsList);
  }
}
