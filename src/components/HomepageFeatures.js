import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Powered by MJML',
    Svg: require('../../static/img/lightning.svg').default,
    description: (
      <>
        Stop fighting those email client rendering gotchas! Premail builds
        on <a href="https://mjml.io/" target="_blank">MJML</a> so you can write
        less code and ignore all that ridiculousness.
      </>
    ),
  },
  {
    title: 'A configurable build process',
    Svg: require('../../static/img/bricks.svg').default,
    description: (
      <>
        MJML intentionally doesn't include a build process. This is that build
        process, and it's configurable to meet your needs and catch the edge
        cases.
      </>
    ),
  },
  {
    title: 'Organize with components in style',
    Svg: require('../../static/img/blueprint.svg').default,
    description: (
      <>
        Design and structure probably doesn't change every time you hit send.
        Keep the style and scaffolding pieces of your emails separate from
        content and ensure consistency.
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
