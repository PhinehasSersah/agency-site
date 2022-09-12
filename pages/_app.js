import Layout from "../components/Layouts";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import "tailwindcss/tailwind.css";
import Section from "../components/Home/Section";
import HeroBlok from "../components/Home/HeroBlok";
import Page from "../components/Home/Page";
import Categories from "../components/Home/Categories"

const components = {
  section: Section,
  heroblok: HeroBlok,
  Page: Page,
  categories: Categories

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
