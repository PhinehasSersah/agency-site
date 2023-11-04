import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { FcLikePlaceholder } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import CartContext from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);

  const navItems = ["Home", "Shop", "Blog", "About Us"];
  return (
    <header className="w-full h-28 flex justify-between items-center bg-white sticky top-0 z-30">
      <h1 className="font-incon text-3xl font-bold ml-10">
        P<span className="text-xl text-yellow-700">EARL</span>Y
      </h1>
      <nav className="flex">
        {navItems.map((item, index) => {
          return (
            <li className="list-none mx-8 " key={index}>
              <Link href={index === 0 ? "/" : "/" + item.toLowerCase()}>
                <a className="tracking-widest uppercase text-[13px] font-incon">
                  {item}
                </a>
              </Link>
            </li>
          );
        })}
      </nav>
      <div className=" flex mr-10 w-64 h-10 justify-evenly items-center relative bg-blac">
        <div className="w-4 h-4 rounded-full absolute font-bold right-3 top-0">
          {cart.length}
        </div>

        <a>
          <BsSearch size="1.5em" />
        </a>

        <Link href="/wishlist">
          <a>
            <FcLikePlaceholder size="1.5em" />
          </a>
        </Link>
        <Link href="/account">
          <a>
            <VscAccount size="1.5em" />
          </a>
        </Link>
        <Link href="/cart">
          <a>
            <BsCart2 size="1.5em" />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
