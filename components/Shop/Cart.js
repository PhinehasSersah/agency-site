import React, { useContext, useState, useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineDelete } from "react-icons/ai";
import CartItem from "./CartItem";

import CartContext from "../context/CartContext";

const Cart = ({ setShowCart }) => {
  const { cart, setCart } = useContext(CartContext);

  const [total, setTotal] = useState();
  const [trigger, setTrigger] = useState(0);

  // deleting cart item
  const deleteItem = (product) => {
    let filteredProduct = cart.filter((item) => item._uid !== product._uid);
    setCart(filteredProduct);
  };

  const calculateTotal = () => {
    let price = document.querySelectorAll(".price");
    let priceArray = Array.from(price);
    let totalArray = [];
    for (let item of priceArray) {
      totalArray.push(Number(item.innerHTML));
    }
    let totalPrice = totalArray.reduce((a, b) => a + b, 0);
    setTotal(totalPrice);
  };
  // useEffect(() => calculateTotal(), [] )

  return (
    <div className="w-full h-full bg-white">
      <div className="flex w-full h-16  justify-between  items-center">
        <h2 className="font-incon uppercase p-3 tracking-wider mt-4">Cart</h2>
        <AiOutlineCloseCircle
          size="1.5rem"
          className="mr-6 mt-4 cursor-pointer"
          onClick={() => setShowCart({ isPaneOpen: false })}
        />
      </div>
      <div className="w-full h-3/5 overflow-y-auto">
        {cart &&
          cart.map((item, index) => (
            <div
              key={index}
              className="w-full h-28 flex my-7 justify-between border-t"
            >
              <CartItem
                item={item}
                index={index}
                deleteItem={deleteItem}
                calculateTotal={calculateTotal}
              />
            </div>
          ))}
      </div>
      <div className="w-4/5 mx-auto h-16 my-2 flex justify-between items-center">
        <h2 className="font-semibold">Subtotal</h2>
        <h2 className="font-semibold">$ {total}</h2>
      </div>
      <p className="font-incon text-center my-5 text-[17px]">
        Taxes and shipping are calculated at checkout
      </p>
      <div className="w-4/5 h-12 mx-auto">
        <button className="uppercase w-full h-full text-white bg-black hover:bg-yellow-700 font-semibold active:ring-black active:ring-1">
          Checkout
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Cart;
