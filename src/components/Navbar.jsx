import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

export default function Navbar() {
  function renderMenuLinkWithChildren(route) {
    return (
      <li className="rounded-none" key={route.name} tabIndex={0}>
        <details>
          <summary className="text-lg text-white font-bold no-underline">
            {route.name}
          </summary>
          <ul className="menu menu-sm dropdown-content z-[1] p-2 border-1 shadow bg-[#1746a2] w-72 rounded-none">
            {route.children.map((child) => {
              return (
                <li className="rounded-none p-1" key={child.name}>
                  <Link
                    href={child.path}
                    className="text-lg text-white font-bold no-underline"
                  >
                    {child.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </details>
      </li>
    );
  }

  function renderMobileMenuItemWithChildren(route) {
    return (
      <li className="rounded-none" key={route.name} tabIndex={0}>
        <p className="text-lg text-white font-bold no-underline mb-0">
          {route.name}
        </p>
        <ul>
          {route.children.map((child) => {
            return (
              <li className="rounded-none p-1" key={child.name}>
                <Link
                  href={child.path}
                  className="text-lg text-white font-bold no-underline"
                >
                  {child.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  return (
    <nav className="navbar bg-[#0a2647] px-2 md:px-4 flex items-center text-white">
      {/* Logo */}
      <div className="navbar-start">
        <Link href="/">
          <Image
            src={header_logo}
            width={120}
            height={120}
            alt="AIAA UTD Logo"
          />
        </Link>
      </div>

      {/* Links */}
      <div className="navbar-end hidden xl:flex items-center">
        <ul className="menu menu-horizontal px-1 mb-0 gap-2">
          {routes.map((route) => {
            if (!route?.children) {
              return (
                <li className="rounded-none" key={route.name}>
                  <Link
                    href={route.path}
                    className="text-lg text-white font-bold no-underline"
                  >
                    {route.name}
                  </Link>
                </li>
              );
            }

            return renderMenuLinkWithChildren(route);
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end xl:hidden">
        <label
          tabIndex={0}
          className="btn btn-ghost"
          style={{
            display: 'flex',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content z-[1] p-2 border-1 shadow bg-[#1746a2] w-72"
        >
          {routes.map((route) => {
            if (!route?.children) {
              return (
                <li className="rounded-none p-1" key={route.name}>
                  <Link
                    href={route.path}
                    className="text-lg text-white font-bold no-underline"
                  >
                    {route.name}
                  </Link>
                </li>
              );
            }

            return renderMobileMenuItemWithChildren(route);
          })}
        </ul>
      </div>
    </nav>
  );
}
