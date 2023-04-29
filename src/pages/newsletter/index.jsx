import React from 'react'
import NewsLetter from "@/components/Newsletter/templates/Newsletter";
import Section from "@/components/Newsletter/templates/Section";
import TwoColumn from '@/components/Newsletter/templates/TwoColumn';
import TwoRow from '@/components/Newsletter/templates/TwoRow';
import Image from '@/components/Newsletter/templates/Image';
import Paragraph from '@/components/Newsletter/templates/Paragraph';
import ParagraphOnly from '@/components/Newsletter/templates/ParagraphOnly';
import List from '@/components/Newsletter/templates/List';
import NewsletterCard from '@/components/Newsletter/NewsletterCard';
import Head from "next/head";
import data from "../../data/newsletter.json"


const components = {
    "Paragraph": Paragraph,
    "ParagraphOnly": ParagraphOnly,
    "TwoColumn": TwoColumn,
    "TwoRow": TwoRow,
    "List": List,
    "Image": Image
}

const Index = () => {
    return (<>
        <Head>
            <title>Newsletter | American Institute of Aeronautics and Astronautics</title>
        </Head>
        <NewsLetter title="Newsletter" subtitle="Here you'll find our monthly newsletters with the latest news and updates.">
            <div className="my-8 flex flex-row flex-wrap justify-center gap-12">
                {data.sort((a,b) => {a.date - b.date}).map((item, index) => {
                    return (
                        <NewsletterCard key={index} {...item} />
                        )
                    })}
            </div>
        </NewsLetter>
    </>
    )
}

export default Index;