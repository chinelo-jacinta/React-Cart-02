const reducer = (state, action) => {
  if (action.type === 'CLEAR') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE') {
    const newCart = state.cart.filter((items) => {
      return items.id !== action.payload;
    });
    return { ...state, cart: newCart };
  }
  if (action.type === 'INCREASE') {
    const newCart = state.cart.map((items) => {
      console.log(action.payload);
      if (items.id === action.payload) {
        return { ...items, amount: items.amount + 1 };
      }
      return items;
    });
    return { ...state, cart: newCart };
  }
  if (action.type === 'DECREASE') {
    const newCart = state.cart
      .map((items) => {
        if (items.id == action.payload) {
          return { ...items, amount: items.amount - 1 };
        }
        return items;
      })
      .filter((item) => {
        return item.amount !== 0;
      });
    return { ...state, cart: newCart };
  }
  if (action.type === 'GET_TOTAL') {
    const { amount, total } = state.cart.reduce(
      (cartResult, cartItems) => {
        // console.log(cartResult, cartItems);
        const getTotal = cartItems.price * cartItems.amount;
        console.log(getTotal);
        cartResult.amount += cartItems.amount;
        return { ...cartResult, total: (cartResult.total += getTotal) };
      },
      {
        amount: 0,
        total: 0,
      }
    );
    return { ...state, amount, total };
  }
  return state;
};
export default reducer;
