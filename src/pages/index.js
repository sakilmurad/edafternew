import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Head from '@docusaurus/Head';

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero ", styles.heroBanner)}>
      <div className="container">
        <div className="row">
        <div className="padding-horiz--md col col--6">
        <img src="img/business2.svg" role="img" alt="GeM Portal Course" />
          {/* <video
            src="img/intro.mp4"
            autoPlay={true}
            muted={true}
            loop={true}
          ></video> */}
        </div>

        <div className="col col--6">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p>Learn GeM Portal for free</p>
          <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/gem-portal-course"
          >
            Get Started
          </Link>
        </div> 
        </div>
        </div>
      </div>
    </header>
  );
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Edafter",
  "url": "https://www.edafter.com",
  "logo": "https://res.cloudinary.com/dl3tfsbn5/image/upload/v1643042686/new_full_logo_with_white_back_kiwh0v.svg",
  "sameAs": "https://www.youtube.com/@edafter"
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Where we build your dafter smart and efficient`}
      description="Learn, build and grow your business with free courses, tools and the services offered by Edafter"
    >
      <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
