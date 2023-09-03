'use client';

import React from 'react';
import Team from '../../components/Team/Team';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Team | American Institute of Aeronautics and Astronautics</title>
      </Head>
      <div>
        <Team />
      </div>
    </>
  );
};

export default Index;
