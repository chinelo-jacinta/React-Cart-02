import React from 'react';
import { data } from './Data';
import SingleCartItem from './SingleCartItem';
import { useGlobalContext } from './Context';

const CartContainer = () => {
  const { cart, total, clear } = useGlobalContext();
  if (cart.length === 0) {
    return <h2 className='section'> your cart is currently empty</h2>;
  }

  return (
    <section className='cart-section'>
      <article className='cart-header'>
        <p> your bag</p>
      </article>
      <div className='cart-container'>
        {cart.map((item) => {
          return <SingleCartItem item={item} key={item.id} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button onClick={clear}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
