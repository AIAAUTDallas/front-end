import React from 'react'
import NewsLetter from "@/components/Blogs/templates/Newsletter";
import Section from "@/components/Blogs/templates/Section";
import TwoColumn from '@/components/Blogs/templates/TwoColumn';
import TwoRow from '@/components/Blogs/templates/TwoRow';
import Image from '@/components/Blogs/templates/Image';
import Paragraph from '@/components/Blogs/templates/Paragraph';
import ParagraphOnly from '@/components/Blogs/templates/ParagraphOnly';
import List from '@/components/Blogs/templates/List';
import NewsletterCard from '@/components/Blogs/NewsletterCard';

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
    return (
        <NewsLetter title="Newsletter" description="Subscribe to our newsletter to get the latest news and updates.">
            <div className="my-8 flex flex-row flex-wrap justify-center gap-12">
                {data.map((item, index) => {
                    return (
                        <NewsletterCard key={index} {...item} />
                    )
                })}
            </div>
        </NewsLetter>
    )
}

export default Index;