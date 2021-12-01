const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.off_price,
      };
    }

    case "REMOVE_PRODUCT": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      const updatedItem = updatedCart[updatedItemIndex];

      if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, cart: filteredCart };
      } else {
        updatedItem.quantity--;
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.off_price,
        };
      }
    }
    case "REGULER_POST": {
      return {
        ...state,
        post: 20,
      };
    }
    case "SPECIAL_POST": {
      return {
        ...state,
        post: 100,
      };
    }
  }
};
export default CartReducer;
