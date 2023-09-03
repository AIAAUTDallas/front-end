import '../styles/globals.css';
import Layout from '../components/Layout'
import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'American Institute of Aeronautics and Astronautics at UTD',
  description: 'Official AIAA UTD Website',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
