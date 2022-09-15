import React from "react";

import { FiFacebook } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="
    w-full h-96 bg-[#f6f6f6] flex justify-evenly"
    >
      <div>
        <h4 className="font-incon tracking-widest my-10 uppercase">
          contact us
        </h4>
        <p className="font-incon tracking-wide text-slate-400 my-3">
          {" "}
          Head Office: <span>26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD</span>
        </p>
        <p className="font-incon tracking-wide text-slate-400 my-3">
          Tel: <span>+233-298-647-242</span>
        </p>
        <p className="font-incon tracking-wide text-slate-400 my-3">
          Email: <span>support@pearly.com</span>
        </p>
      </div>
      <div>
        <h4 className="font-incon tracking-widest my-10 uppercase">
          customer services
        </h4>
        <p className="font-incon tracking-wide text-slate-400 my-3">
          {" "}
          Track Your Order
        </p>
        <p className="font-incon tracking-wide text-slate-400 my-3">
          {" "}
          Product Care &#38; Repair
        </p>
        <p className="font-incon tracking-wide text-slate-400 my-3">
          {" "}
          Frequently Asked Questions
        </p>
      </div>
      <div>
        <h4 className="font-incon tracking-widest my-10 uppercase text-center">
          Socials
        </h4>
        <div className=" flex justify-evenly w-48">
          <div className=" w-12 h-12 rounded-full border-2 grid place-items-center">
            <FiFacebook size="1.5em" />
          </div>
          <div className=" w-12 h-12 rounded-full border-2 grid place-items-center">
            <BsInstagram size="1.5em" />
          </div>
          <div className=" w-12 h-12 rounded-full border-2 grid place-items-center">
            <FaPinterestP size="1.5em" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
