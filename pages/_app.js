import Layout from "../components/Layouts";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import "tailwindcss/tailwind.css";
import Section from "../components/Home/Section";
import HeroBlok from "../components/Home/HeroBlok";
import Page from "../components/Home/Page";
import Categories from "../components/Home/Categories";
import Trending from "../components/Home/Trending";
import ProductPage from "../components/Shop/ProductPage";
import Summer from "../components/Home/Summer";
// import Item from "../components/Shop/Item";

const components = {
  section: Section,
  heroblok: HeroBlok,
  Page: Page,
  categories: Categories,
  trending_produc: Trending,
  Product: ProductPage,
  summer: Summer,
  // product_page: Item,
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
