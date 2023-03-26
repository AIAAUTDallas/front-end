import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Footer = () => {
  return (
    <div className="bg-[#333333] table-footer-group">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="p-4">
          <div className="flex">
          <img src="AIAA_Logo.png" alt="logo" className="h-5 w-5 mr-2"/>
          <h2 className="text-sm text-white">THE AMERICAN INSTITUTE OF AERONAUTICS AND ASTRONAUTICS AT UTD</h2>
          </div>
          <p>Aggressively Pursuing Aerospace Opportunity</p>
          <p>© 2022, AIAA UTD.</p>
          <a href="https://www.instagram.com/aiaa_utd/">
            <svg
              className="h-5 w-5 text-teal-900"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="4" y="4" width="16" height="16" rx="4" />{" "}
              <circle cx="12" cy="12" r="3" />{" "}
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </a>
          <p className="text-xs">
            This website is not an official publication of UT Dallas and does
            not represent the views of the university or its officers. The
            University of Texas at Dallas is an Equal Opportunity/Affirmative
            Action University. Students with disabilities needing special
            assistance to attend events please call (972‑883‑2946). Texas Relay
            Operation: 1‑800‑RELAYTX.
          </p>
        </div>

        <div className="p-4">
          <Nav>
            <Link className={styles.link} href="/">
              Home
            </Link>
            <Link className={styles.link} href="/screens/BlogScreen">
              Blog
            </Link>
            <Link className={styles.link} href="/screens/CalendarScreen">
              Calendar
            </Link>
            <Link className={styles.link} href="/screens/OrganizationScreen">
              Organization
            </Link>
            <Link className={styles.link} href="/screens/ContactScreen">
              Contact Us
            </Link>
            <Link className={styles.link} href="/screens/TeamScreen">
              Team
            </Link>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
