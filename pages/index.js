import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layouts";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
        <Link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></Link>
        <Link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap"
          rel="stylesheet"
        ></Link>
      </Head> */}
      <div className="text-center text-3xl">I am coming for you</div>
    </>
  );
}
