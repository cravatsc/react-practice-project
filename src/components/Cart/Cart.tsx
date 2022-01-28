import classes from './Cart.module.css';

export interface CartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

export const Cart: React.FC = () => {
  const cartItems = [{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );

  return (
    <div>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>50</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};
