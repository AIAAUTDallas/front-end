import React from 'react'
import NewsLetter from "@/components/Blogs/templates/Newsletter";
import Section from "@/components/Blogs/templates/Section";
import TwoColumn from '@/components/Blogs/templates/TwoColumn';
import TwoRow from '@/components/Blogs/templates/TwoRow';
import Image from '@/components/Blogs/templates/Image';
import Paragraph from '@/components/Blogs/templates/Paragraph';
import ParagraphOnly from '@/components/Blogs/templates/ParagraphOnly';
import List from '@/components/Blogs/templates/List';

const data = [
    {
        "title": "Mega Event",
        "subtitle": "Totally Awesome",
        "body": [
            {
                "type": "TwoColumn",
                "left": [
                    {
                        "type": "Image",
                        "src": "https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
                    },
                ],
                "right": [
                    {
                        "type": "Paragraph",
                        "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
                    },
                    {
                        "type": "Paragraph",
                        "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
                    },
                ]
            },
            {
                "type": "ParagraphOnly",
                "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
            },
            {
                "type": "Image",
                "src": "https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
            }
        ]
    },
    {
        "title": "Mega Event",
        "subtitle": "Totally Awesome",
        "body": [
            {
                "type": "TwoColumn",
                "left": [
                    {
                        "type": "Image",
                        "src": "https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
                    },
                ],
                "right": [
                    {
                        "type": "Paragraph",
                        "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
                    },
                    {
                        "type": "Paragraph",
                        "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
                    },
                ]
            },
            {
                "type": "ParagraphOnly",
                "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
            },
            {
                "type": "List",
                "format": "ol",
                // list 4 with facts
                "list": [
                    "asdkajsdkljalskdjads",
                    "aksdjlkasjdlkajsdlkajsdl;kajsd",
                    "askdjl;aksjdl;aksjdl;kajsdl;kjasdl",
                    "ajsdlkajs;dlkjal;sdkjla;sdjl;aksd"
                ]
            },
            {
                "type": "TwoColumn",
                "left": [
                    {
                        "type": "Paragraph",
                        "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
                    },
                    {
                        "type": "Paragraph",
                        "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
                    },
                ],
                "right": [
                    {
                        "type": "Paragraph",
                        "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
                    },
                    {
                        "type": "List",
                        "format": "ol",
                        // list 4 with facts
                        "list": [
                            "asdkajsdkljalskdjads",
                            "aksdjlkasjdlkajsdlkajsdl;kajsd",
                            "askdjl;aksjdl;aksjdl;kajsdl;kjasdl",
                            "ajsdlkajs;dlkjal;sdkjla;sdjl;aksd"
                        ]
                    }
                ]
            }

        ]
    }
]

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
            {data.map((section, index) => {
                return (
                    <Section key={index} title={section.title} subtitle={section.subtitle}>
                        {section.body.map((item, index) => {
                            if (item.type === "List") {
                                return <List key={index} format={item.format} list={item.list} />
                            } else if (item.type === "ParagraphOnly") {
                                return <ParagraphOnly key={index} text={item.text} />
                            } else if (item.type === "TwoColumn") {
                                return <TwoColumn key={index}
                                    left={item.left.map((subitem, index) => {
                                        return React.createElement(components[subitem.type], { key: index, ...subitem })
                                    })}

                                    right={item.right.map((subitem, index) => {
                                        return React.createElement(components[subitem.type], { key: index, ...subitem })
                                    })}
                                />
                            } else if (item.type === "TwoRow") {
                                return <TwoRow key={index}
                                    top={item.top.map((subitem, index) => {
                                        return React.createElement(components[subitem.type], { key: index, ...subitem })
                                    })}

                                    bottom={item.bottom.map((item, index) => {
                                        return React.createElement(components[subitem.type], { key: index, ...subitem })
                                    })}
                                />
                            }else if(item.type === "Image"){
                                return <Image key={index} src={item.src} alt={item.alt} />
                            }
                        })}
                    </Section>
                )
            })}
        </NewsLetter>
    )
}

export default Index;