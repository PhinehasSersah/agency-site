import React, { useContext, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineDelete } from "react-icons/ai";
import CartItem from "./CartItem";

import CartContext from "../context/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  //   const [productQuantity, setProductQuantity] = useState();
  console.log(cart);

  // const increment = (product) => {
  //   if (product.stock === product.userQuantity) return;
  //   product.userQuantity += 1;
  // };
  const deleteItem = (product) => {
    let filteredProduct = cart.filter((item) => item._uid !== product._uid);
    setCart(filteredProduct);
  };
  return (
    <div className="w-full h-screen flex">
      <div className="w-2/3 h-full backdrop-brightness-75"></div>
      <div className="w-1/3 h-full ">
        <div className="flex w-full h-16  justify-between  items-center">
          <h2 className="font-incon uppercase p-3 tracking-wider">Cart</h2>
          <AiOutlineCloseCircle size="1.5rem" className="mr-6" />
        </div>
        <div className="w-full h-3/5  overflow-y-auto ">
          {cart &&
            cart.map((item, index) => (
              <div
                key={index}
                className="w-full h-28 flex my-7 justify-between border-t"
              >
                <CartItem item={item} index={index} deleteItem={deleteItem} />
              </div>
            ))}
        </div>
        <div className="w-4/5 mx-auto h-16 my-2 flex justify-between items-center">
          <h2 className="font-semibold">Subtotal</h2>
          <h2 className="font-semibold">$ {6875}</h2>
        </div>
        <p className="font-incon text-center my-5 text-[17px]">
          Taxes and shipping are calculated at checkout
        </p>
        <div className="w-4/5 h-12 mx-auto">
          <button className=" uppercase w-full h-full text-white bg-black hover:bg-yellow-700 font-semibold ">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
