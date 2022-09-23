import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";
import Head from "next/head";

const Shop = ({ story }) => {
  story = useStoryblokState(story);

  

  return (
    <div>
      <Head>
        <title>Pearly Shop </title>
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  );
};

export async function getStaticProps() {
  let params = {
    version: "draft",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/shop_folder/shop`, params);
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

export default Shop;
