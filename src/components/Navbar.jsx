import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import header_logo from '../../public/header_logo.png';

const Navbar = () => {
    const { push } = useRouter();
    return (<>
        <div className={styles.header} onClick={() => { push("/") }}>
            <img src="/header_logo.png" alt="header logo" />
            <span>AIAA UTD</span>
        </div>
        <div>
            <Nav className={styles.nav}>
                <Link className={styles.link} href='/newsletter'>Newsletter</Link>
                <Link className={styles.link} href='/calendar'>Calendar</Link>
                <Link className={styles.link} href='/team'>Team</Link>
                <div className="group">
                    <p className={styles.link}>
                        Branches  
                    </p>
                    <div className="hidden group-hover:absolute group-hover:flex group-hover:flex-col group-hover:justify-center z-[999] w-[100px]">
                        <Link className="px-3 py-2 no-underline text-white text-center font-medium bg-[#0a2647] hover:bg-[#0f3866]" href='/branches/test'>Test</Link>
                    </div>
                </div>
                {/* <Link className={styles.link} href='/organizations'>Organization</Link> i don't think we're doing anything with this page */}
                <Link className={styles.link} href='/contact-us'>Contact Us</Link>
            </Nav>
        </div>
    </>);
}

export default Navbar;