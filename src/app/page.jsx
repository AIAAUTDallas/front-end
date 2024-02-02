'use client';

import React from 'react';
import HomeScreen from '../components/Home/HomeScreen';
import styles from '../styles/App.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.App}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>American Institute of Aeronautics and Astronautics at UTD</title>
      </Head>
      <HomeScreen />
    </div>
  );
}
