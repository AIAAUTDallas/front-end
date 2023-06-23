import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    "name": "American Institute of Aeronautics and Astronautics at UTD",
    "url": "https://aiaautd.org/",
    "alternateName": "AIAA UTD",
  };
  return (
      <Html lang="en">
        <Head>
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
  );
}
