# Newsletter Information

## Supported Components Overview

```json
{
    // JSON Name : React Component Name
    "Paragraph": Paragraph,
    "ParagraphOnly": ParagraphOnly,
    "TwoColumn": TwoColumn,
    "TwoRow": TwoRow,
    "List": List,
    "Image": Image
}
```

## Newsletter Data JSON Format

**Make sure to include each field even if blanked**

```json
[
    {
        "id": Text,
        "title": Text,
        "subtitle": Text,
        "backgroundImage": URL,
        "date": String,
        "sections": [SECTIONS]
    }
]
```

## Section JSON Format

```json
{
    "title": String,
    "subtitle": String,
    "body": [SUPPORTED COMPONENTS IN JSON FORMAT]
}
```

## Supported Components JSON Format

### Paragraph

```json
{
    "type": "Paragraph",
    "text": String
}
```

### ParagraphOnly

```json
{
    "type": "Paragraph",
    "text": String
}
```

### TwoColumn

```json
{
    "type": "TwoColumn",
    "left": [SUPPORTED COMPONENTS IN JSON FORMAT],
    "rigth": [SUPPORTED COMPONENTS IN JSON FORMAT]
}
```

### TwoRow

```json
{
    "type": "TwoColumn",
    "top": [SUPPORTED COMPONENTS IN JSON FORMAT],
    "bottom": [SUPPORTED COMPONENTS IN JSON FORMAT]
}
```

### List

```json
{
    "type": "List",
    "format": "ol" || "ul",
    "list": [STRING]
}

```

### Image

```json
{
    "type": "Image",
    "src": STRING
}

```


## Example
```json
[
  {
    "id": "1",
    "title": "Mega Event",
    "subtitle": "Totally Awesome",
    "backgroundImage": "https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif",
    "date": "2023-01-01",
    "sections": [
      {
        "title": "Section 1",
        "subtitle": "Section 1 Subtitle",
        "body": [
          {
            "type": "TwoColumn",
            "left": [
              {
                "type": "Image",
                "src": "https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
              }
            ],
            "right": [
              {
                "type": "Paragraph",
                "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
              },
              {
                "type": "Paragraph",
                "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
              }
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
      }
    ]
  },
  {
    "id": "2",
    "title": "Mega Event",
    "subtitle": "Totally Awesome",
    "backgroundImage": "",
    "date": "2023-02-01",
    "sections": [
      {
        "title": "Section 1",
        "subtitle": "Section 1 Subtitle",
        "body": [
          {
            "type": "TwoColumn",
            "left": [
              {
                "type": "Image",
                "src": "https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
              }
            ],
            "right": [
              {
                "type": "Paragraph",
                "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
              },
              {
                "type": "Paragraph",
                "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
              }
            ]
          },
          {
            "type": "ParagraphOnly",
            "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
          },
          {
            "type": "List",
            "format": "ol",
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
              }
            ],
            "right": [
              {
                "type": "Paragraph",
                "text": "The majestic mountain range loomed in the distance, its snow-capped peaks piercing through the clouds. As I hiked closer, I felt my heart racing with excitement and anticipation. With every step, I marveled at the breathtaking scenery around me, from the lush greenery of the forests to the glistening streams that flowed through the valleys. When I finally reached the summit, I was rewarded with a panoramic view that took my breath away, and I felt a sense of achievement like no other."
              },
              {
                "type": "List",
                "format": "ol",
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
  }
]

```
