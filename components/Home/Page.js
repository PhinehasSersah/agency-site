import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import HeroBlok from "./HeroBlok";
import Section from "./Section";
import Categories from "./Categories";
import Collections from "./Collections";
import { BsLock } from "react-icons/bs";

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)} className="relative block">
    <Carousel
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
    >
      {blok.hero.map((nestedBlok, i) => (
        <div key={i}>
          <HeroBlok nestedBlok={nestedBlok} />
        </div>
      ))}
    </Carousel>
    <div className="w-11/12 h-96 flex gap-4 mt-24 mx-auto">
      {blok.section.map((nestedBlok, index) => (
        <div
          className="h-96 w-1/3 relative"
          key={index}
          {...storyblokEditable(nestedBlok)}
        >
          <Section nestedBlok={nestedBlok} />
        </div>
      ))}
    </div>
    <div className="w-full h-[35vh] mt-36 bg-blak">
      <h2 className="font-incon mt-20 text-3xl text-center uppercase font-thin tracking-widest">
        Top Categories
      </h2>
      <div className="w-10/12 flex justify-evenly mt-8 mx-auto ">
        {blok.categories.map((nestedBlok, index) => (
          <div key={index} className="w-52 h-52 rounded-full">
            <Link href="/shop">
              <a>
                <Categories nestedBlok={nestedBlok} />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <div className="w-11/12 h-[55vh] mt-36 flex bg-black mx-auto ">
      {blok.summer.map((nestedBlok, index) => (
        <div className="w-7/12 h-full relative" key={index}>
          <Image
            src={nestedBlok.image.filename}
            alt={nestedBlok.title}
            className="w object-cover "
            width={230}
            height={150}
            layout="responsive"
          />
          <div className="absolute bottom-20 left-[50%] translate-x-[-50%]">
            <h1 className="font-incon text-3xl uppercase text-center text-white tracking-wider">{nestedBlok.title}</h1>
            <h3 className="text-white text-center font-incon tracking-wider ">{nestedBlok.subtext}</h3>
            <Link href="/shop">
              <a>
                <div className="h-12 w-52 border-2 mt-16 mx-auto flex items-center justify-center hover:bg-yellow-700 transition-all ease-in-out duration-300">
                  <h4 className="text-center uppercase text-white font-thin tracking-widest text-sm">
                    Explore
                  </h4>
                  <AiOutlineArrowRight
                    size="1.4em"
                    className="ml-3 text-white"
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </main>
);

export default Page;
