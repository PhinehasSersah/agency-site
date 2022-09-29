import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.module.css";
import { BiHeart } from "react-icons/bi";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import Cart from "./Cart";
import styles from "./Carousel.module.css";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const Item = ({ blok }) => {
  const [count, setCount] = useState(1);
  const [subTotal, setSubTotal] = useState(Number(blok.price) * count);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const [showCart, setShowCart] = useState(false);
  const [showCart, setShowCart] = useState({
    isPaneOpen: false,
  });

  const { cart, wishList, setCart, setWishList } = useContext(CartContext);

  const increment = () => {
    if (count === Number(blok.stock)) return;
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 1) return;
    setCount(count - 1);
  };
  const addToCart = () => {
    const foundItem = cart.find((item) => item.title === blok.title);
    if (foundItem === undefined) {
      blok.totalPrice = Number(blok.price) * count;
      blok.userQuantity = count;
      setCart((prev) => [...prev, blok]);
      setShowCart({ isPaneOpen: true });
      setTimeout(() => setSuccess("Item added successfully"), 3000);
    } else {
      setTimeout(() => setError("Item already in cart"), 1000);
      return;
    }
  };
  const addToWishList = () => {
    const foundItem = wishList.find((item) => item.title === blok.title);
    if (foundItem === undefined) {
      setWishList((prev) => [...prev, blok]);
    } else {
      return;
    }
  };
  const calculateSubtotal = () => setSubTotal(() => count * Number(blok.price));
  useEffect(() => calculateSubtotal(), [count]);
  return (
    <div className="w-full h-full flex relative ">
      <p className="w-fit h-fit absolute top-3 left-1/2 -translate-x-1/2 p-10 rounded-md shadow-md"></p>

      {/* side pane  */}
      <SlidingPane
        width="40vw"
        overlayClassName="some-custom-overlay-class"
        isOpen={showCart.isPaneOpen}
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setShowCart({ isPaneOpen: false });
        }}
      >
        <Cart setShowCart={setShowCart} />
      </SlidingPane>

      <div className="w-3/5 h-full grid place-items-center">
        <Carousel
          showStatus={false}
          showThumbs={true}
          autoPlay={true}
          showArrows={false}
          width={500}
        >
          {blok.image.map((item, index) => (
            <div key={index} className="h-4/5">
              <img
                src={item.filename}
                alt="product item image"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="w-2/5 h-full flex flex-col items-center">
        <div className="w-4/5 mx-auto border-b-[1px] p-6">
          <p>Breadcrumps</p>
          <h1 className="font-incon tracking-wider py-5 text-4xl">
            {blok.title}
          </h1>
          <h2 className="font-semibold text-xl text-yellow-700">
            $<span className="text-black ml-2">{blok.price}</span>
          </h2>
        </div>
        <p className="p-6 font-incon text-[17px] leading-8 w-4/5">
          {blok.description}
        </p>

        {/* subtotal  */}
        <div className="w-4/5 mx-auto px-6 flex h-14 justify-between mt-16">
          <h2 className="font-incon font-semibold text-xl tracking-wider">
            Subtotal
          </h2>
          <p className="font-semibold text-xl">$ {subTotal}</p>
        </div>
        <div className="w-4/5 mx-auto px-6 flex h-14 justify-between mt-10">
          <div className="w-3/12 h-full flex items-center border">
            <button
              className="font-bold w-10 h-full mx-2 text-2xl hover:text-yellow-700"
              onClick={decrement}
            >
              -
            </button>
            <p className="font-bold font-incon">{count}</p>
            <button
              className="font-bold w-10 h-full mx-2 text-xl hover:text-yellow-700"
              onClick={increment}
            >
              +
            </button>
          </div>

          <div className="w-6/12 h-full">
            <button
              onClick={addToCart}
              className=" uppercase w-full h-full text-white bg-black hover:bg-yellow-700 font-semibold "
            >
              Add to Cart
            </button>
          </div>

          <div className="w-2/12 h-full border grid place-items-center">
            <button onClick={addToWishList} className="">
              {" "}
              <BiHeart size="1.5em" className=" hover:text-yellow-700 " />
            </button>
          </div>
        </div>
        <div className="w-4/5 mx-auto px-6 flex h-14 justify-between mt-10">
          <button className="uppercase text-white tracking-wide font-semibold w-full h-full bg-yellow-700 hover:bg-black transition ease-in-out delay-100">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
