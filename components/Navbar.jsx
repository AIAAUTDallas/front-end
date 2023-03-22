import React from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const { push } = useRouter();
    return (<>
        <div className={styles.header}  onClick={() => {push("/")}}>
            <img src='header_logo.png'/>
            AIAA at UTD
        </div>
        <div>
            <Nav className={styles.nav}>
                <Link className={styles.link} href='/blogs'>Blog</Link>
                <Link className={styles.link} href='/calendar'>Calendar</Link>
                <Link className={styles.link} href='/organizations'>Organization</Link>
                <Link className={styles.link} href='/contact-us'>Contact Us</Link>
                <Link className={styles.link} href='/team'>Team</Link>
            </Nav>
        </div>
    </>);
}

export default Navbar;