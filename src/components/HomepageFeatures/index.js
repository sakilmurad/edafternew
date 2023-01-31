import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'We build your business',
    img: "img/business1.svg",
    description: (
      <>
        There are too many things to do to succeed in the industry. Don't worry we take care of it. We offer some courses to make it better understand the need of the industry.
      </>
    ),
  },
  {
    title: 'GeM Portal Course',
    img: "img/business2.svg",
    description: (
      <>
        GeM (Government e-Marketplace) is an very popular and fast growing online platform for public procurement in India. We help business to grow their business in the government sector.
      </>
    ),
  },
  {
    title: 'Training Sessions',
    img: "img/consultant.svg",
    description: (
      <>
        We have recorded too many training videos on the available topics. We can record more videos on your suggested topic.
      </>
    ),
  },
  {
    title: 'Free Tools',
    img: "img/tools.svg",
    description: (
      <>
       There are too many free tools available for your ease. These tools will make it very fast to create your document for a bid. Now you don't need to waste your time for repeating works.
      </>
    ),
  }
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} role="img" />
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
