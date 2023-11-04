import { createContext, useState } from "react";

const CartContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  return (
    <CartContext.Provider value={{cart, setCart, wishList, setWishList}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
