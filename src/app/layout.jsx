import '../styles/globals.css';
import Layout from '../components/Layout';
import React from 'react';

export const metadata = {
  title: 'American Institute of Aeronautics and Astronautics at UTD',
  description: 'Official AIAA UTD Website',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
