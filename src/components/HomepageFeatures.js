import React from 'react';
import styles from './HomepageFeatures.module.css';

const CardList = [
  {
    title: 'go-log',
    description: 'Opinionated, modularized, structured and production-ready GO logging library',
    link: 'mathbalduino.com.br/go-log',
  },
  {
    title: 'go-codegen',
    description: <>Coming soon<br />...</>,
    link: undefined,
  },
  {
    title: 'go-test',
    description: <>Coming soon<br />...</>,
    link: undefined,
  },
  {
    title: 'go-error',
    description: <>Coming soon<br />...</>,
    link: undefined,
  },
  {
    title: 'go-validation',
    description: <>Coming soon<br />...</>,
    link: undefined,
  },
  {
    title: 'go-migration',
    description: <>Coming soon<br />...</>,
    link: undefined,
  },
];

function Card({link, title, description}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card">
        <div className="card__header"><h3>{title}</h3></div>
        <div className="card__body"><p>{description}</p></div>
        <div className="card__footer">
          <a className={`button button--secondary button--block ${link ? '' : 'disabled'}`} href={link ? 'https://' + link : '#'}>
            {link ? link : 'Coming soon...'}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>Open-source Libraries</h1>
        <div className="row">
          {CardList.map((v, i) => (<Card key={i} {...v} />))}
        </div>
      </div>
    </section>
  );
}
