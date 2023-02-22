import Home from "./home";
import Layout from "components/layout";
import About from "./about";
import Career from "./career";
import Skills from "./skills";
import Works from "./works";
import Blog from "./blog";
import Play from "./play";

import ProgressBar from "components/progressbar/progressbar";

import { useState, useEffect } from "react";

import { getPostBySlug } from "libs/api";

import styles from "../styles/index.module.css";

export default function Index({ title }) {
  return (
    <div>
      <Layout>
        <Home />
        <section className={styles.container}>
          <About />
          <Career />
          <Skills />
          <Works />
          {/* <Blog /> */}
          {/* <Play /> */}
        </section>
        <ProgressBar />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const slug = "first";

  const post = await getPostBySlug(slug);

  return {
    props: {
      title: post.title,
    },
  };
}
