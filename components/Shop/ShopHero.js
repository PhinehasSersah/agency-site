import Image from "next/image";
import heroImage from "../../public/hero.jpg";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ShopHero = ({ blok }) => {



  
  return (
    <div className="w-full h-[60vh] relative" {...storyblokEditable(blok)}>
      <div className="">
        <Image
          alt=""
          src={heroImage}
          width={430}
          height={126}
          layout="responsive"
          className="object-cover"
        />
      </div>

      <div className="absolute w-2/3 h-[40vh] top-5 left-1/2 -translate-x-1/2">
        <h1 className="font-incon text-center font-semibold tracking-widest text-[35px] text-white">
          Products
        </h1>
        <p className=" font-incon text-white my-4">Breadcrumps</p>
        <div>
          <Carousel
            showStatus={false}
            showThumbs={false}
            centerMode={true}
            centerSlidePercentage={30}
          >
            {blok.product_page?.slice(0, 8).map((item, index) => (
              <div className="w-60 mx-auto h-60 flex " key={index}>
                <img
                  src={item.image[0].filename}
                  alt={item.image._uid}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ShopHero;
