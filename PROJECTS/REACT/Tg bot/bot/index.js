const TelegramBot = require("node-telegram-bot-api");

const token = "6366307757:AAEkZ_W2arbuJzSzS_kRXfHFgvsDXFSTYGE";
const webAppUrl = "https://web-app-tg-chi.vercel.app/";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Test zone", {
      reply_markup: {
        inline_keyboard: [[{ text: "Yo", web_app: { url: webAppUrl } }]],
      },
    });
  }
});
