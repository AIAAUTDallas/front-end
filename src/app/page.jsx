'use client';

import React from 'react';
import HomeScreen from '../components/Home/HomeScreen';
import styles from '../styles/App.module.css';
import Head from 'next/head';
import KickOff from '../../public/SpringKickoff_ver4.png';
import SpecialEventBanner from '../components/Banner';


export default function Home() {
  return (
    <div className={styles.App}>
      <Head>
        <title>American Institute of Aeronautics and Astronautics at UTD</title>
      </Head>
      <SpecialEventBanner
        title="Spring AIAA KickOff"
        image={KickOff}
        displayStart={new Date('1/20/2024')}
        displayEnd={new Date('2/1/2024')}
        id={1}
      />
      <HomeScreen />
    </div>
  );
}
