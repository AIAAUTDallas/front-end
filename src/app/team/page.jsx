'use client';

import React from 'react';
import Team from '../../components/Team/Team';
import Head from 'next/head';
import PageHeader from '@/components/PageHeader';

const Index = () => {
  return (
    <>
      <Head>
        <title>Team | American Institute of Aeronautics and Astronautics</title>
      </Head>
      <div>
        <PageHeader title="Team" subtitle="Meet Our Dedicated Team" />
        <Team />
      </div>
    </>
  );
};

export default Index;
