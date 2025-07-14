import { Product } from '../interfaces/product.interface';

export class CreateProductRequest implements Partial<Product> {
  name!: string;
  price!: number;
}
