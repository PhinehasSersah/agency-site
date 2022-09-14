import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const Summer = ({nestedBlok}) => {
  return (
    <>
      <Image
        src={nestedBlok.image.filename}
        alt={nestedBlok.title}
        className="w object-cover "
        width={230}
        height={150}
        layout="responsive"
      />
      <div className="absolute bottom-20 left-[50%] translate-x-[-50%]">
        <h1 className="font-incon text-3xl uppercase text-center text-white tracking-wider">
          {nestedBlok.title}
        </h1>
        <h3 className="text-white text-center font-incon tracking-wider ">
          {nestedBlok.subtext}
        </h3>
        <Link href="/shop">
          <a>
            <div className="h-12 w-52 border-2 mt-16 mx-auto flex items-center justify-center hover:bg-yellow-700 transition-all ease-in-out duration-300">
              <h4 className="text-center uppercase text-white font-thin tracking-widest text-sm">
                Explore
              </h4>
              <AiOutlineArrowRight size="1.4em" className="ml-3 text-white" />
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Summer;
