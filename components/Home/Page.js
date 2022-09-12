import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import HeroBlok from "./HeroBlok";
import Section from "./Section";

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)} className="relative">
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
        <div className="h-96 w-1/3 relative" key={index} {...storyblokEditable(nestedBlok)}>
          <Section nestedBlok={nestedBlok} />
        </div>
      ))}
    </div>
  </main>
);

export default Page;
