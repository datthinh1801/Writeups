import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Capture The Flag (CTF)',
    Svg: require('../../static/img/undraw_be_the_hero_ssr2.svg').default,
    description: (
      <>
      Writeups for CTF challenges that I have solved.
      </>
    ),
  },
  {
    title: 'Labs',
    Svg: require('../../static/img/undraw_Code_thinking_re_gka2.svg').default,
    description: (
      <>
      Writeups for security labs that I have done.
      </>
    ),
  },
  {
    title: 'Knowledge-base',
    Svg: require('../../static/img/undraw_hacker_mind_6y85.svg').default,
    description: (
      <>
      Notes for what I have learned.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
