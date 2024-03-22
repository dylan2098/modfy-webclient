import {get, post, put, remove} from '../utils/axios';

export default class CatalogService {
  static async getCatalogs() {
    return await get('/catalog/list');
  }
}