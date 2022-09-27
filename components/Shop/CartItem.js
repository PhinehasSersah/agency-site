import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";

const CartItem = ({ item, deleteItem }) => {
  const [quantity, setQuantity] = useState(Number(item.userQuantity));
  const [subTotal, setSubTotal] = useState(
    Number(item.userQuantity) * Number(item.price)
  );

  const increment = () => {
    if (quantity === Number(item.stock)) return;
    setQuantity(() => quantity + 1);
  };
  const decrement = () => {
    if (quantity === 1) return;
    setQuantity(() => quantity - 1);
  };

  const calculateSubtotal = () => {
    setSubTotal(() => quantity * Number(item.price));
  };

  useEffect(() => calculateSubtotal(), [quantity]);
  return (
    <>
      <div className="w-36 h-full ">
        <Image
          alt="Cart image"
          src={item.image[0].filename}
          width={20}
          height={15}
          layout="responsive"
          className="object-cover"
        />
      </div>
      <div className="w-56 h-full flex flex-col justify-between">
        <h3 className="uppercase text-center font-incon tracking-wide py-1">
          {item.title}
        </h3>
        <div className="h-12 w-2/3 mx-auto flex items-center border justify-between ">
          <button
            onClick={() => decrement()}
            className="font-bold w-10 h-full mx-2 text-2xl hover:text-yellow-700"
          >
            -
          </button>
          <p className="font-bold font-incon">{quantity}</p>
          <button
            onClick={() => increment()}
            className="font-bold w-10 h-full mx-2 text-xl hover:text-yellow-700"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex  h-full flex-col justify-between mr-10">
        <AiOutlineDelete
          onClick={() => deleteItem(item)}
          size="1.3rem"
          className="my-2 cursor-pointer"
          title="delete"
        />

        <p className="fon">$ {subTotal}</p>
      </div>
    </>
  );
};

export default CartItem;
