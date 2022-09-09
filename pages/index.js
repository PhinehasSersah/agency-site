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

export default function Home({ story }) {
  story = useStoryblokState(story);
  console.log(story);
  return (
    <>
      <Head>
      <title>Pearly Jewelries </title>
      </Head>
      {/* <div className="text-center text-3xl">I am coming for you</div> */}
      {/* <Hero /> */}
      <StoryblokComponent blok={story.content} />
    </>
  );
}

export async function getStaticProps() {
  let params = {
    version: "draft",
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
