import Image from "next/image";
import React, { useState, useRef } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import Link from "next/link";

const Trending = ({ nestedBlok, index }) => {
  const [rederedImage, setRenderedImage] = useState(0);
  // const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setRenderedImage(1);
  };

  const onMouseLeave = () => {
    setRenderedImage(0);
  };

  console.log(nestedBlok);
  return (
    <div className="w-80 h-full">
      <Link href={`/shop/${nestedBlok.title}`}>
        <a>
          <div
            className="w-full h-4/5"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Image
              src={nestedBlok.image[rederedImage]?.filename}
              alt={nestedBlok.title}
              className="w object-cover transition-all ease-in-out duration-300"
              width={230}
              height={185}
              layout="responsive"
            />
          </div>
        </a>
      </Link>
      <div className="w-full mx-auto mt-8">
        <div className="mt-4 w-12 mx-auto text-center">
          {index === 0 ? (
            <AiTwotoneStar className="text-yellow-700" />
          ) : index === 2 ? (
            <div className="flex">
              <AiTwotoneStar className="text-yellow-700" size="1.3em"/>{" "}
              <AiTwotoneStar className="text-yellow-700" size="1.3em"/>
              <AiTwotoneStar className="text-yellow-700" size="1.3em"/>{" "}
              <AiTwotoneStar className="text-yellow-700" size="1.3em" />
            </div>
          ) : (
            <div className="flex">
              {" "}
              <AiTwotoneStar className="text-yellow-700" />{" "}
              <AiTwotoneStar className="text-yellow-700" />
              <AiTwotoneStar className="text-yellow-700" />
            </div>
          )}
        </div>
        <p className="font-incon text-sm tracking-widest text-center uppercase ">
          {nestedBlok.title}
        </p>
        <p className="font-bold text-center mt-2">
          <span className="text-yellow-700 font-bold">$</span>{" "}
          {nestedBlok.price}
        </p>
      </div>
    </div>
  );
};

export default Trending;
