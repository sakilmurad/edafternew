import React, {useEffect} from 'react'
import Link from '@docusaurus/Link'
import styles from "./styles.module.css";
import {ArticleAds} from '../Ads';

const tools = [
    {
        title: "Make In India (MII) Certificate",
        description: "Generate Make In India (MII) Certificate to participate in class 1 and class 2 Local Supplier on GeM",
        link: "/tools/make-in-india",
        Svg: require('@site/static/img/tools/home.svg').default,
    },
    {
        title: "OEM Authorization Certificate",
        description: "Reseller authority letter to issue authorization letter to your resellers for quoting on your behalf",
        link: "/tools/oem-authorization-certificate",
        Svg: require('@site/static/img/tools/people.svg').default,
    }
]

function RenderTools({Svg, title, description, link}) {
    return(
        <div className='col col--6'>
        <div className={styles.card}>
        <Svg className={styles.toolSvg} role="img" />
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={link} className="button button--primary button--lg">Generate</Link>
        </div>
    </div>
    )
}

function Alltools() {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        catch (e) {
          console.log(e)
        }
    }, [])
  return (
    <section className={styles.features}>
        <div className='container center'>
      <h1 >Free Tools</h1>
      <p>Use tools offered by Edafter to increase your productivity</p>
      <ArticleAds />
    <div className='row'>
        {tools.map((props, idx) =>(
            <RenderTools key={idx} {...props} />
        ))}
    </div>
    <ArticleAds />
    </div>
    </section>
  )
}

export default Alltools