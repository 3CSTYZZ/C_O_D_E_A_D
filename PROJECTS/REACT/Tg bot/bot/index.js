// rank + new lvl stats

// initialization
const TelegramBot = require("node-telegram-bot-api");
const token = "6366307757:AAEkZ_W2arbuJzSzS_kRXfHFgvsDXFSTYGE";
const bot = new TelegramBot(token, {
  // polling: { interval: 300, autoStart: false, params: { timeout: 10 } },
  polling: true,
});

// TG bot
bot.on("message", async (msg) => {
  const userId = msg.from.username;
  const chatId = msg.chat.id;
  const messageId = msg.message_id;
  const text = msg.text;
  const html = `
  <strong>Приветики и добро пожаловать, 
  ${msg.from.first_name} 🔥</strong>
Меня зовут <i>Люци</i> и я твой <tg-spoiler>ассистент</tg-spoiler>
  Тут всё просто как варить людишек в котле! Можно, например, рейтинг глянуть, <s>кости друг-другу перемыть</s> оценить кто из друзей забрался выше
  Но для начала советую проверить свой LVL - там гордость создателя ^^
  И у <i>Мявки</i> кости брось, может хоть на сей раз повезёт..
  `;

  // database
  // users pts
  const pts = {
    max: 58,
    tema: 41,
    fedya: 60,
    barca: 0,
    jane: 0,
    nina: 0,
    sveta: 0,
    pasha: 0,
    gleb: 0,
    polly: 0
  };

  // main list of users
  function userList(name) {
    return `
  ${pts.fedya} - ${userId === "Amblig" ? name : "Федя"}
${pts.max} - ${userId === "ecstvzz" ? name : "Максим"}
${pts.tema} - ${userId === "temasafonov" ? name : "Тёма"}
  `;
  }

  // focus on user
  function userFocus() {
    if (userId === "ecstvzz") {
      return userList("<strong>МАКСИМ</strong>");
    } else if (userId === "temasafonov") {
      return userList("<strong>ТЁМА</strong>");
    } else if (userId === "Amblig") {
      return userList("<strong>ФЕДЯ</strong>");
    }
  }

  const list = userFocus();

  // "🔥"

  // commands
  if (text === "/start") {
    // clear command
    await bot.deleteMessage(chatId, messageId);

    // Luci sticker
    await bot.sendSticker(
      chatId,
      "CAACAgIAAxkBAAEL1eBmDINRenGNOxRjC0X7XkW6u6iJZgAC9AADIjeOBDqJ2Xzsyg0kNAQ"
    );

    // welcome message + menu buttons
    await bot.sendMessage(chatId, html, {
      parse_mode: "HTML",
      reply_markup: {
        keyboard: [
          ["💸 Payment", "💯 Rank"],
          ["✌️ Vote", "🌦 Weather"],
          ["🎰ฅᨐᵉᵒʷ"],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text === "💸 Payment") {
    // sending payment
    await bot.sendInvoice(
      chatId,
      "Оплата воллейбола",
      "💳 ➠ 🔐 ➠ 🏐",
      "payload",
      "381764678:TEST:82325",
      "RUB",
      [
        {
          label: "volleyball",
          amount: 700 * 100,
        },
      ],
      { protect_content: true }
    );
  } else if (text === "💯 Rank") {
    // clear command
    await bot.deleteMessage(chatId, messageId);

    // table ranks
    await bot.sendMessage(chatId, list, {
      parse_mode: "HTML",
    });
  } else if (text === "🎰ฅᨐᵉᵒʷ") {
    // clear command
    await bot.deleteMessage(chatId, messageId);

    // Gambling
    await bot.sendDice(chatId, { emoji: "🎲" });
  }
});
