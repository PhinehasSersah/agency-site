import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const HeroBlok = ({ nestedBlok }) => {
  return (
    <div {...storyblokEditable(nestedBlok)}>
      <div>
        <img
          src={nestedBlok.image.filename}
          alt={nestedBlok.image._uid}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-36 left-24 w-4/12 h-96">
        <h1 className="font-incon text-[60px] leading tracking-wider text-white">
          {nestedBlok.title}
        </h1>
        <Link href="/shop">
          <a>
            <div className="h-12 w-72 border-2 mt-16 mx-auto flex items-center justify-center hover:bg-yellow-700 transition-all ease-in-out duration-300">
              <h4 className="text-center uppercase text-white font-thin tracking-widest text-sm">
                Explore bestsellers
              </h4>
              <AiOutlineArrowRight size="1.4em" className="ml-3 text-white" />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeroBlok;
