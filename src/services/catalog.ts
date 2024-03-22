import {get, post, put, remove} from '../utils/axios';

export default class CatalogService {
  async getCatalog() {
    const catalogs = await get('/catalog');

    console.log(catalogs);

    return [];
  }
}