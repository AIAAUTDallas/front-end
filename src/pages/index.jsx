import React from 'react'
import HomeScreen from '../components/Home/HomeScreen';
import styles from '../styles/App.module.css'

export default function Home() {
  return (
    <div className={styles.App}>
        <HomeScreen />
    </div>
  );
}
