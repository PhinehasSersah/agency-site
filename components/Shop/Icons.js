import React from "react";
import { BiHeart } from "react-icons/bi";
import { FaOpencart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
const Icons = () => {
  return (
    <div className="w-36 h-36 flex flex-col">
      <div className="w-full h-12 flex flex-row-reverse">
        <BiHeart size="1.5em" className="peer ml-2" />
        <div className="h-3/5 w-2/3 rounded-sm invisible  peer-hover:visible bg-black text-center text-white grid place-items-center font-incon tracking-wide text-sm relative">
          Wishlist
          <div className="w-3 h-3 absolute bg-black -right-1 top-1/2 -translate-y-1/2 rotate-45"></div>
        </div>
      </div>
      <div className="w-full h-12 flex  flex-row-reverse">
        <BsSearch size="1.5em" className="peer ml-2" />
        <div className="h-3/5 w-2/3 rounded-sm invisible  peer-hover:visible bg-black text-center text-white grid place-items-center font-incon tracking-wide text-sm relative">
          Preview
          <div className="w-3 h-3 absolute bg-black -right-1 top-1/2 -translate-y-1/2 rotate-45"></div>
        </div>
      </div>
      <div className="w-full h-12 flex flex-row-reverse">
        <FaOpencart size="1.5em" className="peer ml-2" />
        <div className="h-3/5 w-2/3 rounded-sm invisible  peer-hover:visible bg-black text-center text-white grid place-items-center font-incon tracking-wide text-sm relative">
          Add to Cart
          <div className="w-3 h-3 absolute bg-black -right-1 top-1/2 -translate-y-1/2 rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
