import React from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/Nav.module.css'
import Link from 'next/link'

const NavBar = () => {
    return (<>
        <div className={styles.header}><img href='/' src='AIAA_Logo.png'/>AIAA at UTD</div>
        <div>
            <Nav className={styles.nav}>
                <Link className={styles.link} href='/screens/BlogScreen'>Blog</Link>
                <Link className={styles.link} href='/screens/CalendarScreen'>Calendar</Link>
                <Link className={styles.link} href='/screens/OrganizationScreen'>Organization</Link>
                <Link className={styles.link} href='/screens/ContactScreen'>Contact Us</Link>
            </Nav>
        </div>
    </>);
}

export default NavBar