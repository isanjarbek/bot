const TelegramApi = require('node-telegram-bot-api')
const { userInfo } = require('os')

const api = '1880662117:AAF7Ix_U1QswHKIpR_tQImw1pW1BAMl9fXY'

const bot = new TelegramApi(api, { polling: true })

const valueOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Btn-1', callback_data: '1a' }, { text: 'Btn-2', callback_data: '2b' }],
            [{ text: 'Btn-3', callback_data: '3c' }],
            [{ text: 'Btn-4', callback_data: '4d' }],
        ]
    })
}

bot.setMyCommands([
    { command: '/start', description: 'Xush kelibsiz' },
    { command: '/info', description: "O'zingiz haqidangizda ma'lumot bering" }
])


const start = () => {
    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id
        // if (text === '/start') {
        //     return bot.sendMessage(chatId, `Assalomu alaykum ${msg.from.first_name}`)
        // }
        if (text === '/info') {
            return bot.sendMessage(chatId, 'Sizga qanday yordam bera olaman.', valueOptions)
        }
        if ((text == ! '/info' || text == ! '/start') && text.slice(0, 1) === '/')
            return bot.sendMessage(chatId, "⚠️ Bunday buyruq mavjud emas, iltimos qaytdan urinib ko'ring!")

        return bot.sendMessage(chatId, text)
        if (text === 'Location') {
            return bot.sendLocation(chatId,)
        }
        //foydalanuchi yozgan xabarni bot o'ziga qaytarib beradi.
    })
}

start()


bot.on('message', (msg) => {

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "<b>Qalin shrift</b> \n <i>bo'yalama</i> \n <em>italic with em</em> \n <a href=\"http://www.example.com/\">Manzil</a> \n <code>kod ni shrifti</code> \n <pre>pre-formatted fixed-width code block</pre>", { parse_mode: "HTML" });
    }
});

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, `Assalomu alaykum ${msg.from.first_name}`, {
        "reply_markup": {
            "keyboard": [["Button-1", "Button-2"], ["Button-3"], ["Button-4"]]
        }
    });

});

