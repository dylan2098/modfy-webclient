import OrderHistoryCard from './orderHistoryCard';

interface Product {
  id?: string;
  thumb_src?: string;
  thumb_alt?: string;
  title?: string;
  price?: number;
  description?: string;
}

interface Order {
  orderNumber?: string;
  products?: Product[];
  address?: string;
  email?: string;
  date?: string;
  payment?: {
    cardNumber?: string;
    expiringDate?: string;
  };
  phoneNumber?: string;

}

interface Props {
  orders?: Order[] | any[];
  products?: Product[];
}

export default function OrderHistory(props: Props) {
  const { orders, products } = props;

  let orderHistoryCards: any = [];

  orders?.forEach((order, i) => {
    let orderProducts: any = [];

    order.products?.forEach((productDetails: { id: string | undefined; }) => {
      products?.forEach((product) => {
        if (product.id === productDetails.id) {
          orderProducts.push(product);
        }
      });
    });
    orderHistoryCards.push(<OrderHistoryCard key={i} order={order} products={orderProducts} />);
  });
  return (
    <>
      <div>
        <h3 className='mb-0'>Order history</h3>
        <p className='mb-5'>See your recent orders, download your invoices.</p>
        {orderHistoryCards}
      </div>
    </>
  );
}
