import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroBlok = ({ blok }) => {
  return (
    <main {...storyblokEditable}>
      <Carousel>
        {/* <Carousel> */}
        <div className="flex">
          <img src={blok.image.filename} alt={blok.image._uid} />
        </div>

        {/* </Carousel> */}
      </Carousel>
    </main>
  );
};

export default HeroBlok;
