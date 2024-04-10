import { get, post, put, remove } from '../utils/axios';

export default class BasketService {
  static addToBakset(productId: string, quantity: number) {
    return post('/basket/create-basket', {
      basket: [
        {
          product_id: productId,
          quantity: quantity,
        },
      ],
    });
  }

  static updateBasketItem(basketId: string, productId: string, quantity: number) {
    return put(`/basket/update-basket/${productId}`, {
      basket_id: basketId,
      basket: [
        {
          quantity: quantity,
          productId: productId,
        },
      ],
    });
  }

  static getBasket(basketId: string) {
    return get(`/basket/get-basket/${basketId}`);
  }
}
