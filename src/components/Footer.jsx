import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  return (
    <>
    <div className="bg-[#1746a2] py-4">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between text-gray-400">
        <div className="flex flex-col w-full py-2 md:py-4 md:w-1/3">
          <div className="flex m-auto">
            <img src="./AIAA_Logo.png" alt="logo" className="h-5 w-5" />
            <h2 className="text-sm text-white text-lg font-serif, font-family: Chivo,
  font-extrabold ">AIAA UTD</h2>
          </div>
          <p className="text-center">
            Aggressively Pursuing Aerospace Opportunity
          </p>
          <p className="text-center">© 2022, AIAA UTD.</p>
        </div>

        <div className="flex flex-col justify-center py-2 md:py-4 w-full md:w-1/3">
          <div className="flex justify-center">
            <a href="https://www.instagram.com/aiaa_utd/">
              <svg
                className="h-5 w-12 text-teal-900"
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
            <a href="https://www.instagram.com/aiaa_utd/">
              <svg
                className="h-5 w-12 text-teal-900"
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
            <a href="https://www.instagram.com/aiaa_utd/">
              <svg
                className="h-5 w-12 text-teal-900"
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
            </div>
        </div>

        <div className="flex flex-col w-full py-2 md:py-4 md:w-1/3">
          <Nav className="flex justify-center">
            <Link className={styles.link} href="/">
              Home
            </Link>
            <Link className={styles.link} href="/newsletter">
              Newsletter
            </Link>
            <Link className={styles.link} href="/calendar">
              Calendar
            </Link>
            <Link className={styles.link} href="/team">
              Team
            </Link>
            <Link className={styles.link} href="/contact-us">
              Contact Us
            </Link>
          </Nav>
        </div>
      </div>
    </div>
          <div className="bg-[#0a2647] flex flex-row p-3 text-center ">
          <p className="text-xs mx-auto flex justify-between text-white-400 ">
            This website is not an official publication of UT Dallas and does not
            represent the views of the university or its officers. The University
            of Texas at Dallas is an Equal Opportunity/Affirmative Action
            University. Students with disabilities needing special assistance to
            attend events please call (972‑883‑2946). Texas Relay Operation:
            1‑800‑RELAYTX.
          </p>
        </div>
    </>
  );
};

export default Footer;
