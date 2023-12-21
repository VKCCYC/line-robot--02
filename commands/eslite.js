import axios from 'axios'
import * as cheerio from 'cheerio'
import esliteTemplate from '../templates/eslite.js'
import _ from 'lodash'
import fs from 'node:fs'

export default async (event) => {
  try {
    const id = event.message.text.replace('博客來', '')
    const { data } = await axios.get(
      `https://search.books.com.tw/search/query/cat/1/sort/1/v/1/page/1/spell/3/key/${id}#f_adv`
    )
    const $ = cheerio.load(data)
    const bubbles = []

    $('.table-td').each(function () {
      const template = esliteTemplate().contents[1]
      // 圖片
      const tdImg = $(this).find('img').attr('data-src')
      const newImg = tdImg.replace(/&amp;/g, '&')
      template.hero.url = newImg
      // 文字
      template.body.contents[0].text = $(this).find('img').attr('alt')
      // 連結
      template.footer.contents[0].action.uri = new URL($(this).find('.box a').attr('href'), 'https://www.books.com.tw/')
      // 價格
      template.body.contents[1].contents[0].text = $(this).find('li').text()
      console.log($(this).find('li').text())
      bubbles.push(template)
    })

    const dataBook1 = _.chunk(bubbles, 12)

    const result = await event.reply({
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: dataBook1[0]
      }
    })

    if (process.env.DEBUG === 'true') {
      fs.writeFileSync('./dump/eslite.json', JSON.stringify(bubbles, null, 2))
    }

    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
