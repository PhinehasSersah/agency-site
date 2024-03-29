import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layouts";
import Link from "next/link";
import Hero from "../components/Home/HeroBlok";
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";

export default function Home({ story, }) {
  story = useStoryblokState(story, {
    resolve_relations: ["trending.shop"]
  });
  return (
    <>
      <Head>
        <title>Pearly Jewelries </title>
      </Head>
      <StoryblokComponent blok={story.content}  />
    </>
  );
}

export async function getStaticProps() {
  let params = {
    version: "draft",
    resolve_relations: ["trending.shop_folder"],
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/home`, params);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
