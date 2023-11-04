import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import HeroBlok from "./HeroBlok";
import Section from "./Section";
import Categories from "./Categories";
import Summer from "./Summer";
import Trending from "./Trending";


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
    <div className="w-11/12 h-[55vh] mt-36 flex mx-auto ">
      {blok.summer.map((nestedBlok, index) => (
        <div className="w-7/12 h-full relative" key={index}>
          <Summer nestedBlok={nestedBlok} />
        </div>
      ))}
    </div>

    {/* trending  */}

    <div className="mt-20">
      <h2 className="text-center my-12 font-incon text-2xl tracking-widest uppercase">
        Trending Product
      </h2>
      <div className="w-full h-[40vh] flex mx-auto mb-20 justify-evenly gap-6">
        {blok.trending_product.map((nestedBlok, index) => (
          <div className="h-full " key={index}>
            <Trending nestedBlok={nestedBlok} index={index} />
          </div>
        ))}
      </div>
    </div>
    <hr className="w-full h-2 text-black my-28" />
  </main>
);

export default Page;
