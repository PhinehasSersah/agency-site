import Head from "next/head";
import Layout from "../../components/Layouts";
import Item from "../../components/Shop/Item";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
const StoreItem = ({ story }) => {
  // story = useStoryblokState(story);
  return <main className="w-full h-screen"> <Item blok={story[0]} /> </main>;
};
export default StoreItem;

export async function getStaticProps({ params }) {
  const { title } = params;

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(
    `cdn/stories/shop_folder/shop`,
    sbParams
  );

  const singleItem = data.story?.content?.product_page.filter(
    (product) => product.title === title
  );

  return {
    props: {
      story: data ? singleItem : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(
    `cdn/stories/shop_folder/shop`,
    sbParams
  );

  const allProduct = data.story?.content?.product_page;
  let paths = [];
  allProduct.forEach((item) => {
    return paths.push({ params: { title: item.title } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
