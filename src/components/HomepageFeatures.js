import React from 'react';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const CardList = [
  {
    title: 'go-log',
    description: 'Opinionated, modularized, structured and production-ready GO logging library',
    link: 'mathbalduino.com.br/go-log',
    gocovToken: 'X6MM6EFXGT',
  },
  {
    title: 'go-codegen',
    description: 'Set of functions/methods that will ease GO code generation',
    link: 'mathbalduino.com.br/go-codegen',
    gocovToken: 'EUF064OND3',
  },
  {
    title: 'go-test',
    description: <>Coming soon<br />...</>,
    link: undefined,
    gocovToken: '',
  },
  {
    title: 'go-error',
    description: <>Coming soon<br />...</>,
    link: undefined,
    gocovToken: '',
  },
  {
    title: 'go-validation',
    description: <>Coming soon<br />...</>,
    link: undefined,
    gocovToken: '',
  },
  {
    title: 'go-migration',
    description: <>Coming soon<br />...</>,
    link: undefined,
    gocovToken: '',
  },
];

function Card({link, title, description, gocovToken}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card">
        <div className="card__header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          <div className="col padding--none">
            <h3>{title}</h3>
            <div>
            {!!gocovToken
              ? (
              <>
                <Link to={`https://github.com/mathbalduino/${title}/actions/workflows/ci.yml`}>
                  <img src={`https://github.com/mathbalduino/${title}/actions/workflows/ci.yml/badge.svg?branch=main`} />
                </Link>
                &nbsp; &nbsp;
                <Link to={`https://codecov.io/gh/mathbalduino/${title}`}>
                  <img src={`https://codecov.io/gh/mathbalduino/${title}/branch/main/graph/badge.svg?token=${gocovToken}`}/>
                </Link>
              </>
            )
            : (
              <>
                <img src={`https://github.com/mathbalduino/go-log/actions/workflows/ci.yml/badge.svg?branch=NONEXISTENTBRANCH`} />
                &nbsp; &nbsp;
                <img src={`https://codecov.io/gh/mathbalduino/${title}/branch/main/graph/badge.svg?token=${gocovToken}`}/>
              </>
            )}
            </div>
          </div>

        </div>
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
