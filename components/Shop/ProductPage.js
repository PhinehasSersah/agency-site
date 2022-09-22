import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import ShopHero from "./ShopHero";
import Trending from "../Home/Trending";
import { BsChevronCompactDown } from "react-icons/bs";
import { BsChevronCompactUp } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Icons from "./Icons";

const ProductPage = ({ blok }) => {
  const scrollDown = () => {};
  return (
    <main className="w-full " {...storyblokEditable(blok)}>
      <div>
        <ShopHero blok={blok} />
      </div>
      <div className="flex ">
        <div className="w-[24vw] h-96 mt-40 mx-auto">
          <h1 className="font-incon uppercase font-bold tracking-widest text-center mb-8">
            Featured Product
          </h1>

          {blok.product_page?.slice(7, 11).map((item, index) => (
            <div
              key={index}
              className="w-11/12 h-36 my-10 flex items-center bg-blck"
            >
              <Link href="#">
                <a className="h-36 w-1/2 px-3 mt-1">
                  <div className="h-full w-full mx-2">
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
              <div key={index} className="my-5 relative">
                <div className="absolute z-20 bottom-24 right-4">
                  <Icons />
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
