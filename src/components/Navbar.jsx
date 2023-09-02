import React from 'react';
import styles from '../styles/Nav.module.css';
import Image from "next/image";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import header_logo from '../../public/header_logo.png';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Newsletter',
    path: '/newsletter',
  },
  {
    name: 'Calendar',
    path: '/calendar',
  },
  {
    name: 'Team',
    path: '/team',
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
  },
];

const Navbar = () => {
  const { push } = useRouter();

  return (
    <nav className='navbar bg-[#0a2647] px-4 flex items-center text-white'>
      <div className='navbar-start'>
        <Link href='/'>
          <Image src={header_logo} width={128} height={128} alt='AIAA UTD Logo' />
        </Link>
      </div>
      <div className='navbar-end'>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )


  // return (
  //   <>
  //     <div
  //       className={styles.header}
  //       onClick={() => {
  //         push('/');
  //       }}
  //     >
  //       <img src="/header_logo.png" alt="header logo" />
  //       <span>AIAA UTD</span>
  //     </div>
  //     <div>
  //       <Nav className={styles.nav}>
  //         <Link className={styles.link} href="/newsletter">
  //           Newsletter
  //         </Link>
  //         <Link className={styles.link} href="/calendar">
  //           Calendar
  //         </Link>
  //         <Link className={styles.link} href="/team">
  //           Team
  //         </Link>
  //         {/* <Link className={styles.link} href='/organizations'>Organization</Link> i don't think we're doing anything with this page */}
  //         <Link className={styles.link} href="/contact-us">
  //           Contact Us
  //         </Link>
  //       </Nav>
  //     </div>
  //   </>
  // );
};

export default Navbar;
