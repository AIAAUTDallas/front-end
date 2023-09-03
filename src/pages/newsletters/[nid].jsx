import React, {useEffect, useState} from 'react';
import NewsLetter from '@/components/Newsletter/templates/Newsletter';
import Section from '@/components/Newsletter/templates/Section';
import TwoColumn from '@/components/Newsletter/templates/TwoColumn';
import TwoRow from '@/components/Newsletter/templates/TwoRow';
import Image from '@/components/Newsletter/templates/Image';
import Paragraph from '@/components/Newsletter/templates/Paragraph';
import ParagraphOnly from '@/components/Newsletter/templates/ParagraphOnly';
import List from '@/components/Newsletter/templates/List';
import NewsletterCard from '@/components/Newsletter/NewsletterCard';

import Link from 'next/link';

import {useRouter} from 'next/router';
import data from '../../data/newsletter.json';

const components = {
  Paragraph: Paragraph,
  ParagraphOnly: ParagraphOnly,
  TwoColumn: TwoColumn,
  TwoRow: TwoRow,
  List: List,
  Image: Image,
};

export default function Newsletter() {
  const router = useRouter();
  const {nid} = router.query;
  const [loading, setLoading] = useState(true);
  const [newsletter, setNewsletter] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      setNewsletter(
        data.find((item) => {
          return item.id == nid;
        }),
      );
      setLoading(false);
    }
  }, [router.isReady, nid]);

  if (!loading && !newsletter) {
    return (
      <NewsLetter
        title="Newsletter"
        subtitle="Here you'll find our monthly newsletters with the latest news and updates."
      >
        <Section>
          <h1 className="text-2xl text-white">
            We are sorry, the newsletter you are looking was not found.
          </h1>
          {data && data.length > 0 && (
            <>
              <h2 className="text-2xl text-white font-bold text-center">
                Here are some of our latest newsletters:
              </h2>
              <div className="my-8 flex flex-row flex-wrap justify-center gap-12">
                {data
                  .sort((a, b) => {
                    a.date - b.date;
                  })
                  .map((item, index) => {
                    if (index > 2) return null;

                    return <NewsletterCard key={index} {...item} />;
                  })}
              </div>
            </>
          )}
          <Link
            href="/newsletter"
            className="no-underline w-[200px] text-white bg-blue-600 p-2 self-center rounded-lg mt-8"
          >
            View all newsletters
          </Link>
        </Section>
      </NewsLetter>
    );
  }

  return (
    <NewsLetter
      title={newsletter?.title}
      subtitle={newsletter?.subtitle}
      backgroundImage={newsletter?.backgroundImage}
    >
      {loading && (
        <div className="flex flex-col items-center justify-center w-full h-full bg-slate-900">
          <h1>Loading...</h1>
        </div>
      )}

      {!loading &&
        newsletter &&
        newsletter.sections.map((section, index) => {
          return (
            <Section
              key={index}
              title={section.title}
              subtitle={section.subtitle}
            >
              {section.body.map((item, index) => {
                if (item.type === 'List') {
                  return (
                    <List key={index} format={item.format} list={item.list} />
                  );
                } else if (item.type === 'ParagraphOnly') {
                  return <ParagraphOnly key={index} text={item.text} />;
                } else if (item.type === 'TwoColumn') {
                  return (
                    <TwoColumn
                      key={index}
                      left={item.left.map((subitem, index) => {
                        return React.createElement(components[subitem.type], {
                          key: index,
                          ...subitem,
                        });
                      })}
                      right={item.right.map((subitem, index) => {
                        return React.createElement(components[subitem.type], {
                          key: index,
                          ...subitem,
                        });
                      })}
                    />
                  );
                } else if (item.type === 'TwoRow') {
                  return (
                    <TwoRow
                      key={index}
                      top={item.top.map((subitem, index) => {
                        return React.createElement(components[subitem.type], {
                          key: index,
                          ...subitem,
                        });
                      })}
                      bottom={item.bottom.map((item, index) => {
                        return React.createElement(components[subitem.type], {
                          key: index,
                          ...subitem,
                        });
                      })}
                    />
                  );
                } else if (item.type === 'Image') {
                  return <Image key={index} src={item.src} alt={item.alt} />;
                }
              })}
            </Section>
          );
        })}
    </NewsLetter>
  );
}
