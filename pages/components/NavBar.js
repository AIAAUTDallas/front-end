import React from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/Nav.module.css'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div>
            <Nav className={styles.nav}>
                <Link className={styles.link} href='/'><img src='AIAA_Logo.png' alt='logo' style={{ width: '50px' }} /></Link>
                <Link className={styles.link} href='/screens/BlogScreen'>Blog</Link>
                <Link className={styles.link} href='/screens/CalendarScreen'>Calendar</Link>
                <Link className={styles.link} href='/screens/OrganizationScreen'>Organization</Link>
                <Link className={styles.link} href='/screens/ContactScreen'>Contact Us</Link>
                <Link className={styles.link} href='/screens/TeamScreen'>Team</Link>
            </Nav>
        </div>
    )
}

export default NavBar