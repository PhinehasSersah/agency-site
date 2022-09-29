import {
  storyblokEditable,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";
import ShopHero from "./ShopHero";
import Trending from "../Home/Trending";
import { BsChevronCompactDown } from "react-icons/bs";
import { BsChevronCompactUp } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Icons from "./Icons";
import { useState, useContext } from "react";
import CartContext from "../context/CartContext";

const ProductPage = ({ blok }) => {
  const [wishError, setWishError] = useState("");
  const [cartError, setCartError] = useState("");
  const [wishSuccess, setWishSuccess] = useState("");
  const [cartSuccess, setCartSuccess] = useState("");
  const { cart, setCart, wishList, setWishList } = useContext(CartContext);

  const addToCart = (item) => {
    const foundItem = cart.find((product) => product.title === item.title);
    if (foundItem === undefined) {
      item.userQuantity = 1;
      setCart((prev) => [...prev, item]);
      setCartSuccess("Added to cart");
      setTimeout(() => setCartSuccess(""), 2500);
    } else {
      setCartError("Item already in cart");
      setTimeout(() => setCartError(""), 2500);
    }
  };
  const addToWishList = (item) => {
    const foundItem = wishList.find((product) => product.title === item.title);
    if (foundItem === undefined) {
      setWishList((prev) => [...prev, blok]);
      setWishSuccess("Added to wish list");
      setTimeout(() => setWishSuccess(""), 2500);
    } else {
      setWishError("Item already in wish list");
      setTimeout(() => setWishError(""), 2500);
    }
  };

  blok = useStoryblokState(blok);
  const scrollDown = () => {};
  return (
    <main className="w-full" {...storyblokEditable(blok)}>
      {/* Error message  */}
      <div className="fixed top-56 left-1/2 -translate-x-1/2 rounded-md shadow-md bg-white w-fit grid place-content-center h-fit z-10">
          <p className={`text-red-500 font-bold ${wishError ? "p-3" : ""}`}>
            {wishError}
          </p>
          <p className={`text-red-500 font-bold ${cartError ? "p-3" : ""}`}>
            {cartError}
          </p>
          <p className={`text-green-500 font-bold ${wishSuccess ? "p-3" : ""}`}>
            {wishSuccess}
          </p>
          <p className={`text-green-500 font-bold ${cartSuccess ? "p-3" : ""}`}>
            {cartSuccess}
          </p>
        </div>
      <div>
        <ShopHero blok={blok} />
      </div>

      <div className="flex ">
      
        <div className="w-[24vw] h-96 mt-40 mx-auto">
          <h1 className="font-incon uppercase font-bold tracking-widest text-center mb-14">
            Featured Product
          </h1>
          {blok.product_page?.slice(7, 11).map((item, index) => (
            <div
              key={index}
              className="w-11/12 h-36 my-10 flex items-center border-b"
            >
              <Link href={`/shop/${item.title}`}>
                <a className="h-36 w-1/2 px-3 grid place-items-center">
                  <div className="h-full w-full mx-2 mb-1">
                    <Image
                      src={item.image[1].filename}
                      width={80}
                      height={80}
                      layout="responsive"
                      className="object-cover"
                      alt="featured product images"
                    />
                  </div>
                </a>
              </Link>
              <div className="flex flex-col">
                <h4 className="font-incon uppercase text-sm tracking-widest text-center">
                  {item.title}
                </h4>
                <p className="font-semibold text-yellow-600 text-center">
                  $ {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[75vw] relative">
          <div className="w-11/12  mx-auto h-fit gap-10 justify-center my-40 flex flex-wrap ">
            {/* scrollDown  */}
            <div className="w-10 h-10 grid place-items-center rounded-full bg-black absolute top-10 right-10">
              <BsChevronCompactDown size="1.8em" className=" text-white " />
            </div>

            {/* scrollUp  */}
            <div className="w-10 h-10 grid place-items-center rounded-full bg-black absolute bottom-20 right-10">
              <BsChevronCompactUp size="1.8em" className=" text-white " />
            </div>

            {blok.product_page?.map((item, index) => (
              <div key={index} className="my-5 relative group">
                <div className="absolute z-20 bottom-24 right-4 hidden group-hover:block">
                  <Icons
                    item={item}
                    addToCart={addToCart}
                    addToWishList={addToWishList}
                  />
                </div>
                <Trending nestedBlok={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
