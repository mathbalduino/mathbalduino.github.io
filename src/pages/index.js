import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

export const MyHeader = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img style={{ marginBottom: 20, borderRadius: 150, width: 300 }} src="img/me.jpg"/>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ul className="pills margin-bottom--none">
            <a style={{color: 'white'}} href='https://github.com/mathbalduino' target='_blank'><li className="pills__item">GitHub</li></a>
            <a style={{color: 'white'}} href='https://instagram.com/mathbalduino' target='_blank'><li className="pills__item">Instagram</li></a>
            <a style={{color: 'white'}} href='https://twitter.com/mathbalduino' target='_blank'><li className="pills__item">Twitter</li></a>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={'@mathbalduino'}
      description="Software Developer">
      <MyHeader />
      <main>
        <HomepageFeatures />
        <hr style={{ maxWidth: '60%', margin: 'auto' }} />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '2rem 0',
          width: '100%',
        }}>
          <div className="container">
            <div className='row'>
              <div className="col col--6" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Blog</h2>
                <p>Sometimes I write blog posts about software development and technology in general. Feel free to read my posts!</p>
                <a style={{ maxWidth: 300 }} className={`button button--secondary button--block`} href={'/blog'}>
                  Go to /blog
                </a>
              </div>
              <div className="col col--6" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>About</h2>
                <p>If you want to know who I am, where I live, what's my education, etc, you can see my About page</p>
                <a style={{ maxWidth: 300 }} className={`button button--secondary button--block`} href={'/about'}>
                  Go to /about
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
