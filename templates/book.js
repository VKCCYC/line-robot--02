export default () => {
  return {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        hero: {
          type: 'image',
          size: 'full',
          aspectRatio: '20:26',
          aspectMode: 'cover',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png'
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: 'Arm Chair, White',
              wrap: true,
              weight: 'bold',
              size: 'xl'
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '$49',
                  wrap: true,
                  weight: 'bold',
                  size: 'lg',
                  flex: 0
                },
                {
                  type: 'text',
                  text: '.',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0
                }
              ]
            }
          ]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              style: 'primary',
              action: {
                type: 'uri',
                label: '前往網站購買',
                uri: 'https://linecorp.com'
              }
            }
          ]
        }
      },
      {
        type: 'bubble',
        hero: {
          type: 'image',
          size: 'full',
          aspectRatio: '20:26',
          aspectMode: 'cover',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png'
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: 'Metal Desk Lamp',
              wrap: true,
              weight: 'bold',
              size: 'xl'
            },
            {
              type: 'box',
              layout: 'baseline',
              flex: 1,
              contents: [
                {
                  type: 'text',
                  text: '$11',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0
                },
                {
                  type: 'text',
                  text: '.99',
                  wrap: true,
                  weight: 'bold',
                  size: 'sm',
                  flex: 0
                }
              ]
            }
          ]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              flex: 2,
              style: 'primary',
              color: '#aaaaaa',
              action: {
                type: 'uri',
                label: 'Add to Cart',
                uri: 'https://linecorp.com'
              }
            }
          ]
        }
      },
      {
        type: 'bubble',
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              flex: 1,
              gravity: 'center',
              action: {
                type: 'uri',
                label: 'See more',
                uri: 'https://linecorp.com'
              }
            }
          ]
        }
      }
    ]
  }
}
