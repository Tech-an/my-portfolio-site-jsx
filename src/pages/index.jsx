import Home from "./home";
import Layout from "components/layout";
import About from "./about";
import Career from "./career";
import Skills from "./skills";
import Works from "./works";
import Play from "./play";
import Blog from "./blog";
import ProgressBar from "components/progressbar/progressbar";

import Accordion from "components/accordion/accordion";

import styles from "../styles/index.module.css";

export default function Index() {
  return (
    <div>
      {/* <Accordion /> */}
      <Layout>
        <Home />
        <section className={styles.container}>
          <About />
          <Career />
          <Skills />
          <Works />
          <Blog />
          <Play />
        </section>
        <ProgressBar />
      </Layout>
    </div>
  );
}

// export async function getStaticProps() {
//   const slug = "first";

//   const post = await getPostBySlug(slug);

//   return {
//     props: {
//       title: post.title,
//     },
//   };
// }
