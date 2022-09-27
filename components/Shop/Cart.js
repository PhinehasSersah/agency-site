import React, { useContext } from "react";
import { AiOutlineCloseCircle, AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";
import CartContext from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart)
  return (
    <div className="w-full h-screen flex">
      <div className="w-2/3 h-full backdrop-brightness-75">rgerrregrgerg</div>
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
                className="w-full  h-28 flex my-7 justify-between border-t"
              >
                <div className="w-36 h-full ">
                  <Image alt="Cart image" src={item.image[0].filename} width={20} height={15} layout="responsive"  className="object-cover"/>
                </div>
                <div className="w-56 h-full flex flex-col justify-between">
                  <h3 className="uppercase text-center font-incon tracking-wide py-1">
                    {item.title}
                  </h3>
                  <div className="h-12 w-2/3 mx-auto flex items-center border justify-between ">
                    <button className="font-bold w-10 h-full mx-2 text-2xl hover:text-yellow-700">
                      -
                    </button>
                    <p className="font-bold font-incon">{43}</p>
                    <button className="font-bold w-10 h-full mx-2 text-xl hover:text-yellow-700">
                      +
                    </button>
                  </div>
                </div>
                <div className="flex  h-full flex-col justify-between mr-10">
                  <AiOutlineDelete size="1.3rem" className="my-2 cursor-pointer" title="delete" />
                  <p className="fon">$ {190}</p>
                </div>
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
