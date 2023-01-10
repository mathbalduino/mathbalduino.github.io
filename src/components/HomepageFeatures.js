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
        <h1>Applications</h1>
        <div className="row" style={{ marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <div className="col col--4" style={{ display: 'flex', justifyContent: 'center', position: 'relative', alignItems: 'center' }}>
            <img src="img/sisyphus-mockup-enUS.png"/>
            <img src="img/sisyphus-logo.jpg" style={{ borderRadius: 250, position: 'absolute', boxShadow: '10px 10px 68px -26px rgb(0 0 0 / 75%)' }}/>
          </div>
          <div className="col col--6">
            <div className="card" style={{ padding: 16, borderRadius: 16 }}>
              <h1>Sisyphus</h1>
              <p>
                Sisyphus is a fitness app (iOS/Android) that allows you to save detailed information about your workouts, in a completely anonymous manner.
              </p>
              <p style={{marginBottom: 0}}>
                You'll be able to save:
                <ul>
                  <li>Active time</li>
                  <li>Rest</li>
                  <li>Which and how much exercises were done</li>
                  <li>How much sets</li>
                  <li>How much repetitions</li>
                  <li>etc...</li>
                </ul>

                Along all those infos, you'll get insights about your evolution over time:
                <ul>
                  <li>Comparisons with previous workouts</li>
                  <li>A variety of statistics about the workouts sessions</li>
                  <li>etc...</li>
                </ul>

                Also, you can use it to help you with:
                <ul>
                 <li>Body weight tracking (using it as a reference for some body-weight exercises)</li>
                 <li>Creatine daily dosage</li>
                 <li>Body fat tracking</li>
                </ul>

                Give it a try!
              </p>
              <div style={{ display: 'flex', marginTop: 16 }}>
                <a target="_blank" className="button button--secondary button--block " href="https://apps.apple.com/us/app/sisyphus-workout/id1663511426">iOS</a>
                <div style={{ width: 32 }}></div>
                <a target="_blank" className="button button--secondary button--block " href="https://play.google.com/store/apps/details?id=br.com.mathbalduino.sisyphus">Android</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Open-source Libraries</h1>
        <div className="row">
          {CardList.map((v, i) => (<Card key={i} {...v} />))}
        </div>
      </div>
    </section>
  );
}
