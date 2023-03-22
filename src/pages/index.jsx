import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeScreen from '../components/Home/HomeScreen';
import styles from '../styles/App.module.css'
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={styles.App}>
        <HomeScreen />
    </div>
  );
}
