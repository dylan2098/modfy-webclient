import {get, post, put, remove} from '../utils/axios';

export default class ProduceService {
  static getProductsByCategory(categoryId: string) {
    return get('/product/get-products-by-category/' + categoryId);
  }

  static getProduct(productId: string) {
    return get('/product/' + productId);
  }
}