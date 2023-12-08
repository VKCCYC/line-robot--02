import 'dotenv/config'
import linebot from 'linebot'
import * as book from './commands/book.js'
import eslite from './commands/eslite.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  // console.log(event);
  if (event.message.type === 'text') {
    if (event.message.text.startsWith('金石堂')) {
      console.log('Text starts with 查詢.')
      book.update(event)

      // const totle = _.concat(book.update(event), eslite(event));
      // console.log(totle);

      // try {
      //   await Promise.all([book.update(event), eslite(event)]);
      // } catch (error) {
      //   console.error('Promise.all中出现错误：', error);
      // }
    } else if (event.message.text.startsWith('博客來')) {
      eslite(event)
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
