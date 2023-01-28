import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cozie Research',
    Svg: require('@site/static/img/undraw_teaching_green.svg').default,
    description: (
      <>
        Cozie has been deploy for building science research. 
      </>
    ),
    target: 'https://cozie.app/docs/cozie/intro-cozie'
  },
  {
    title: 'Cozie for Apple',
    Svg: require('@site/static/img/undraw_watch_application_orange.svg').default,
    description: (
      <>
        Cozie is available as an app on the Apple Watch.
      </>
    ),
    target: 'https://www.cozie-apple.app'
  },
  {
    title: 'Cozie for Fitbit',
    Svg: require('@site/static/img/undraw_watch_application_blue.svg').default,
    description: (
      <>
        Cozie is available as a clockface app on select Fitbit devices.
      </>
    ),
    target: 'https://www.cozie-fitbit.app'
  },
];

function Feature({Svg, title, description, target}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={target}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        
      </div>
      </a>
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
