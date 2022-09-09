import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroBlok = ({ blok }) => {
  return (
    <main className="w-screen h-screen bg-slate-500" {...storyblokEditable}>
      <Carousel>
        <Image />

      </Carousel>
    </main>
  );
};

export default HeroBlok;
