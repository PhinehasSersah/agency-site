import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <div className="" {...storyblokEditable(blok)}>
      {blok.Hero.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Hero;