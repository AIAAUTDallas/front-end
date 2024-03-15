'use client';

import React from 'react';
import Contact from '../../components/Contact/Contact';
import Head from 'next/head';
import PageHeader from '@/components/PageHeader';

const Index = () => {
  return (
    <>
      <Head>
        <title>
          Contact Us | American Institute of Aeronautics and Astronautics
        </title>
      </Head>
      <div>
        <PageHeader title="Contact Us" subtitle="Ask Us Anything" />
        <Contact />
      </div>
      
    </>
  );
};

export default Index;
