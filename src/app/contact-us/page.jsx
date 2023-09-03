'use client';

import React from 'react';
import Contact from '../../components/Contact/Contact';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>
          Contact Us | American Institute of Aeronautics and Astronautics
        </title>
      </Head>
      <Contact />
    </>
  );
};

export default Index;
