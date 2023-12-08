import axios from 'axios'
import * as cheerio from 'cheerio'
import bookTemplate from '../templates/book.js'
import _ from 'lodash'
import fs from 'node:fs'

export const update = async (event) => {
  try {
    const id = event.message.text.replace('金石堂', '')
    const { data } = await axios.get(`https://www.kingstone.com.tw/search/key/${id}/buy/b0`)
    const $ = cheerio.load(data)
    const bubbles = []

    $('.displayunit').each(function () {
      const template = bookTemplate().contents[0]

      // 处理 .coverbox
      const coverImg = $(this).find('.coverbox img').attr('data-src')
      const coverAlt = $(this).find('.coverbox img').attr('alt')
      const coverImgUrl = new URL($(this).find('.coverbox a').attr('href'), 'https://www.kingstone.com.tw/')

      // 处理 .buymixbox
      const buyMixPrice01 = $(this).find('.buymixbox span:first').not('.btnbuyset span').text()
      const buyMixPrice02 = $(this).find('.buymixbox span:eq(1)').not('.btnbuyset span').text()

      // 填充 template 物件
      template.hero.url = coverImg
      template.body.contents[0].text = coverAlt
      template.footer.contents[0].action.uri = coverImgUrl
      template.body.contents[1].contents[0].text = buyMixPrice01
      if (buyMixPrice02) {
        template.body.contents[1].contents[1].text = buyMixPrice02
      }

      console.log($(this).find('.buymixbox span:eq(1)').not('.btnbuyset span').text())
      // 將 template 推送到 bubbles 陣列中
      bubbles.push(template)
    })

    const dataBook = _.chunk(bubbles, 5)

    const result = await event.reply({
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: dataBook[0]
      }
    })

    if (process.env.DEBUG === 'true') {
      fs.writeFileSync('./dump/book.json', JSON.stringify(bubbles, null, 2))
    }

    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
