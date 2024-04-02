import {get, post, put, remove} from '../utils/axios';

export default class ProduceService {
  static async getProductsByCategory(categoryId: string) {
    return await get('/product/get-products-by-category/' + categoryId);
  }
}