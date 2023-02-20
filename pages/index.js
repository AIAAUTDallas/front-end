import React from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import styles from './components/styles/App.module.css'

export default function Home() {
  return (
    <div className={styles.App}>
      <NavBar />
      <HomeScreen />
      <Footer />
    </div>
  );
}
