import React from 'react'
import Link from '@docusaurus/Link'
import styles from "./styles.module.css";

const tools = [
    {
        title: "Make In India (MII) Certificate",
        description: "Generate Make In India (MII) Certificate to participate in class 1 and class 2 Local Supplier on GeM",
        link: "/tools/make-in-india",
        Svg: require('@site/static/img/tools/home.svg').default,
    },
    // {
    //     title: "Reseller Authority Letter",
    //     description: "Reseller authority letter to issue authorization letter to your resellers to quote on your behalf",
    //     link: "/tools/make-in-india",
    //     Svg: require('@site/static/img/tools/people.svg').default,
    // }
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
  return (
    <section className={styles.features}>
        <div className='container center'>
      <h1 >Free Tools</h1>
      <p>Use tools offered by Edafter to increase your productivity</p>
    <div className='row'>
        {tools.map((props, idx) =>(
            <RenderTools key={idx} {...props} />
        ))}
    </div>
    </div>
    </section>
  )
}

export default Alltools