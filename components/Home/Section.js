import Image from "next/image";
import Link from "next/link";

const Section = ({ nestedBlok }) => {
  return (
    <div className="w-full h-full">
      <Image
        src={nestedBlok.image.filename}
        alt={nestedBlok.title}
        className="w object-cover"
        width={455}
        height={385}
      />
      <h1 className="absolute bottom-16 left-[50%] translate-x-[-50%] uppercase text-[22px] tracking-widest leading-8 font-incon font-thin">
        {nestedBlok.title}
      </h1>
      <Link href="/shop">
        <a>
          <div className=" w-28 h-8 absolute bottom-8 left-[50%] translate-x-[-50%]">
            <p className="uppercase text-[12px] p-2 text-center underline underline-offset-8 tracking-widest transition ease-in duration-300 hover:text-white hover:bg-yellow-700">
              shop now
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Section;
