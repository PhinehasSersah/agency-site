import React, { useContext, useState } from "react";
import CartContext from "../../components/context/CartContext";
import CartItem from "../../components/Shop/CartItem";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  const [total, setTotal] = useState();
  const [trigger, setTrigger] = useState(0);
  console.log(cart);
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
  return (
    <div className="w-full h-screen">
      <h1 className="font-incon text-center text-3xl my-8">Your Cart</h1>

      <div className="w-11/12 mx-auto h-4/5 flex gap-8">
        <div className="w-3/5 h-full overflow-y-auto">
          <div className="w-full flex justify-between border">
            <h2 className="uppercase font-incon font-semibold p-3">product</h2>
            <h2 className="uppercase font-incon font-semibold p-3 ">total</h2>
          </div>
          {cart &&
            cart.map((item, index) => (
              <div
                className="w-full h-44 border flex justify-between p-3"
                key={index}
              >
                <CartItem
                  index={index}
                  deleteItem={deleteItem}
                  calculateTotal={calculateTotal}
                  item={item}
                />
              </div>
            ))}
        </div>
        <div className="w-2/5 h-4/5 bg-gray-200">
          <h2 className="uppercase font-incon font-semibold p-3 text-center w-full border bg-gray-300">
            check out
          </h2>

          <div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;
