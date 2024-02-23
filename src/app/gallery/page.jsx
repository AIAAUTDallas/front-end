'use client';

import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Head from 'next/head';
import PageHeader from '@/components/PageHeader';

const Index = () => {
  return (
    <>
      <Head>
        <title>Team | American Institute of Aeronautics and Astronautics</title>
      </Head>
      <div>
        <PageHeader title="Gallery" subtitle="Explore Our Gallery" />
        <Gallery />
      </div>
    </>
  );
};

export default Index;
