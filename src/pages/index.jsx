import Home from "./home";
import Layout from "components/layout";
import About from "./about";
import Career from "./career";
import Skills from "./skills";
import Works from "./works";
import Play from "./play";
import Blog from "./blog";
import ProgressBar from "components/progressbar/progressbar";

import styles from "../styles/index.module.css";
import CareerUpgrade from "components/careerUpgrade/career-upgrade";

export default function Index() {
  return (
    <div>
      {/* <CareerUpgrade />
      <Career /> */}

      <Layout>
        <Home />
        <section className={styles.container}>
          <About />
          {/* <Career /> */}
          <CareerUpgrade />
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
