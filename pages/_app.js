import Layout from "../components/Layouts";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import "tailwindcss/tailwind.css";
import Hero from "../components/Home/Hero";
import HeroBlok from "../components/Home/HeroBlok";

const components = {
  Hero: Hero,
  heroblok: HeroBlok,

};

storyblokInit({
  accessToken: "97lj2JMxYV6VoUSrz2m3cQtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
