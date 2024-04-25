import React from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { SlArrowUp } from 'react-icons/sl';
import { useGlobalContext } from './Context';

const SingleCartItem = ({ item }) => {
  const { id, img, title, price, amount } = item;
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <>
      <article className='cart-item'>
        <section className='cart-header'>
          <img src={img} alt={title} />
          <div>
            <p>${price}</p>
            <button onClick={() => remove(id)}>remove</button>
          </div>
        </section>
        <div className='btn-container'>
          {/* increase amount */}
          <button className='amount-btn' onClick={() => increase(id)}>
            <SlArrowUp />
          </button>
          {/* amount */}
          <p className='amount'>{amount}</p>
          {/* decrease amount */}
          <button className='amount-btn' onClick={() => decrease(id)}>
            <SlArrowDown />
          </button>
        </div>
      </article>
    </>
  );
};

export default SingleCartItem;
