import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import ShopHero from "./ShopHero";

const ProductPage = ({ blok }) => {
  return (
    <main className="w-full " {...storyblokEditable(blok)}>
      <div>
        {/* <ShopHero /> */}
        <ShopHero blok={blok} />
      </div>
    </main>
  );
};

export default ProductPage;
