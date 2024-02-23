import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import header_logo from '../../public/header_logo.png';
import {useState} from 'react';

const routes = [
  {
    name: 'Branches',
    path: '/branches',
    children: [
      {
        name: 'Drone Engineering Corps',
        path: '/branch/DEC',
      },
      {
        name: 'Comet Rocketry',
        path: '/branch/Rocketry',
      },
      {
        name: 'Design Build Fly',
        path: '/branch/DBF',
      },
      {
        name: 'Aerospace Research Corps',
        path: '/branch/ARC',
      },
      {
        name: 'Business',
        path: '/branch/Business',
      },
      {
        name: 'Marketing',
        path: '/branch/Marketing',
      },
      {
        name: 'Web',
        path: '/branch/Web',
      },
    ],
  },
  {
    name: 'Gallery',
    path: '/gallery',
  },
  {
    name: 'Newsletters',
    path: '/newsletters',
  },
  {
    name: 'Events',
    path: '/events',
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function RenderMenuLinkWithChildren({route}) {
    const [openHover, setOpenHover] = useState(false);

    return (
      <li
        className="rounded-none"
        key={route.name}
        tabIndex={0}
        onMouseOver={() => setOpenHover(true)}
        onMouseLeave={() => setOpenHover(false)}
      >
        <details open={openHover}>
          <summary className="text-lg text-white font-bold no-underline">
            {route.name}
          </summary>
          <ul
            className="menu menu-sm dropdown-content z-[999] p-2 border-1 shadow bg-[#1746a2] w-72 rounded-none mt-0"
            onMouseEnter={() => setOpenHover(true)}
            onMouseLeave={() => setOpenHover(false)}
          >
            {route.children.map((child) => {
              return (
                <li className="rounded-none p-1" key={child.name}>
                  <Link
                    onClick={() => setOpenHover(false)}
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

  function RenderMobileMenuItemWithChildren({route, setOpen}) {
    return (
      <li className="rounded-none" key={route.name} tabIndex={0}>
        <details className="text-lg text-white font-bold no-underline mb-0">
          <summary className="text-lg text-white font-bold no-underline">
            {route.name}
          </summary>
          <ul className="menu-dropdown">
            {route.children.map((child) => {
              return (
                <li className="rounded-none p-1" key={child.name}>
                  <Link
                    onClick={() => setOpen(false)}
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
        <ul className="menu menu-horizontal hover:menu-dropdown-show px-1 mb-0 gap-2">
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

            return (
              <RenderMenuLinkWithChildren route={route} key={route.name} />
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end z-[999] xl:hidden">
        <details open={open} onMouseLeave={() => setOpen(false)}>
          <summary className="btn p-0" onClick={() => setOpen(!open)}>
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
          </summary>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] p-2 border-1 shadow bg-[#1746a2] w-72"
          >
            {routes.map((route) => {
              if (!route?.children) {
                return (
                  <li className="rounded-none p-1" key={route.name}>
                    <Link
                      onClick={() => setOpen(false)}
                      href={route.path}
                      className="text-lg text-white font-bold no-underline"
                    >
                      {route.name}
                    </Link>
                  </li>
                );
              }

              return (
                <RenderMobileMenuItemWithChildren
                  route={route}
                  setOpen={setOpen}
                  key={route.name}
                />
              );
            })}
          </ul>
        </details>
      </div>
    </nav>
  );
}
