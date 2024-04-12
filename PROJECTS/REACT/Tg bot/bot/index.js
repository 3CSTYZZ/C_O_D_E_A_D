// new lvl stats / weather

// initialization
const TelegramBot = require("node-telegram-bot-api");
const token = "6366307757:AAEkZ_W2arbuJzSzS_kRXfHFgvsDXFSTYGE";
const bot = new TelegramBot(token, {
  // polling: { interval: 300, autoStart: false, params: { timeout: 10 } },
  polling: true,
});

// database
const data = require("./database");

// TG bot 🔥
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

  // FUNCTIONS
  // rendering main list of users
  function userList(points, name) {
    return `
      💯- <u><b>Rank</b></u>
${
  userId === data.id.sveta
    ? `${points} ⇜ ${name} ${data.flow.sveta}♛`
    : `${data.pts.sveta} - Света ${data.flow.sveta}♛`
}
${
  userId === data.id.samu
    ? `${points} ⇜ ${name} ${data.flow.samu}`
    : `${data.pts.samu} - Саму ${data.flow.samu}`
}
${
  userId === data.id.fedya
    ? `${points} ⇜ ${name} ${data.flow.fedya}`
    : `${data.pts.fedya} - Федя ${data.flow.fedya}`
}
${
  userId === data.id.gleb
    ? `${points} ⇜ ${name} ${data.flow.gleb}`
    : `${data.pts.gleb} - Глебъ ${data.flow.gleb}`
}
${
  userId === data.id.pasha
    ? `${points} ⇜ ${name} ${data.flow.pasha}`
    : `${data.pts.pasha} - Пауль ${data.flow.pasha}`
}
${
  userId === data.id.max
    ? `${points} ⇜ ${name} ${data.flow.max}`
    : `${data.pts.max} - Макс ${data.flow.max}`
}
${
  userId === data.id.barca
    ? `${points} ⇜ ${name} ${data.flow.barca}`
    : `${data.pts.barca} - Барса ${data.flow.barca}`
}
${
  userId === data.id.nina
    ? `${points} ⇜ ${name} ${data.flow.nina}`
    : `${data.pts.nina} - Нина ${data.flow.nina}`
}
${
  userId === data.id.polly
    ? `${points} ⇜ ${name} ${data.flow.polly}`
    : `${data.pts.polly} - Полли ${data.flow.polly}`
}
${
  userId === data.id.jane
    ? `${points} ⇜ ${name} ${data.flow.jane}`
    : `${data.pts.jane} - Жанин ${data.flow.jane}`
}
${
  userId === data.id.vera
    ? `${points} ⇜ ${name} ${data.flow.vera}`
    : `${data.pts.vera} - Вера ${data.flow.vera}`
}
${
  userId === data.id.dante
    ? `${points} ⇜ ${name} ${data.flow.dante}`
    : `${data.pts.dante} - Данте ${data.flow.dante}`
}
${
  userId === data.id.jane_jr
    ? `${points} ⇜ ${name} ${data.flow.jane_jr}`
    : `${data.pts.jane_jr} - Женя ${data.flow.jane_jr}`
}
${
  userId === data.id.anya
    ? `${points} ⇜ ${name} ${data.flow.anya}`
    : `${data.pts.anya} - Анька ${data.flow.anya}`
}
${
  userId === data.id.tema
    ? `${points} ⇜ ${name} ${data.flow.tema}`
    : `${data.pts.tema} - Тёма ${data.flow.tema}`
}
    `;
  }

  // focus on current user
  function userFocus() {
    if (userId === data.id.max) {
      return userList(
        `<strong>${data.pts.max}</strong>`,
        "<strong>Макс</strong>"
      );
    } else if (userId === data.id.tema) {
      return userList(
        `<strong>${data.pts.tema}</strong>`,
        "<strong>Тёма</strong>"
      );
    } else if (userId === data.id.fedya) {
      return userList(
        `<strong>${data.pts.fedya}</strong>`,
        "<strong>Федя</strong>"
      );
    } else if (userId === data.id.samu) {
      return userList(
        `<strong>${data.pts.samu}</strong>`,
        "<strong>Саму</strong>"
      );
    } else if (userId === data.id.gleb) {
      return userList(
        `<strong>${data.pts.gleb}</strong>`,
        "<strong>Глебъ</strong>"
      );
    } else if (userId === data.id.pasha) {
      return userList(
        `<strong>${data.pts.pasha}</strong>`,
        "<strong>Пауль</strong>"
      );
    } else if (userId === data.id.barca) {
      return userList(
        `<strong>${data.pts.barca}</strong>`,
        "<strong>Барса</strong>"
      );
    } else if (userId === data.id.nina) {
      return userList(
        `<strong>${data.pts.nina}</strong>`,
        "<strong>Нина</strong>"
      );
    } else if (userId === data.id.polly) {
      return userList(
        `<strong>${data.pts.polly}</strong>`,
        "<strong>Полли</strong>"
      );
    } else if (userId === data.id.jane) {
      return userList(
        `<strong>${data.pts.jane}</strong>`,
        "<strong>Жанин</strong>"
      );
    } else if (userId === data.id.vera) {
      return userList(
        `<strong>${data.pts.vera}</strong>`,
        "<strong>Вера</strong>"
      );
    } else if (userId === data.id.jane_jr) {
      return userList(
        `<strong>${data.pts.jane_jr}</strong>`,
        "<strong>Женя</strong>"
      );
    } else if (userId === data.id.anya) {
      return userList(
        `<strong>${data.pts.anya}</strong>`,
        "<strong>Анька</strong>"
      );
    } else if (userId === data.id.dante) {
      return userList(
        `<strong>${data.pts.dante}</strong>`,
        "<strong>Данте</strong>"
      );
    } else if (userId === data.id.sveta) {
      return userList(
        `<strong>${data.pts.sveta}</strong>`,
        "<strong>Света</strong>"
      );
    }
  }
  const list = userFocus();

  // COMMANDS
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
    // clear command
    await bot.deleteMessage(chatId, messageId);

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
  } else if (text === "✌️ Vote") {
    // code block ⨭
  } else if (text === "🎰ฅᨐᵉᵒʷ") {
    // clear command
    await bot.deleteMessage(chatId, messageId);

    // Gambling
    await bot.sendDice(chatId, { emoji: "🎲" });
  }
});
