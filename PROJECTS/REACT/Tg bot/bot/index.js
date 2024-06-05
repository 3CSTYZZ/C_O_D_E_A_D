// initialization
const TelegramBot = require("node-telegram-bot-api");
const token = "6366307757:AAEkZ_W2arbuJzSzS_kRXfHFgvsDXFSTYGE";
const bot = new TelegramBot(token, {
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
          ["😈 PH", "🌦 Weather"],
          ["🎰ฅᨐᵉᵒʷ"],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text === "💸 Payment") {
    // clear command
    await bot.deleteMessage(chatId, messageId);

    // Luci sticker
    bot.sendSticker(
      chatId,
      "CAACAgIAAxkBAAEL67xmHatAm6-t7M7YlII52PNjZ3nGFgAC6AADIjeOBAc5lJnaQ4OpNAQ"
    );

    // sending payment
    await bot.sendInvoice(
      chatId,
      "Оплата воллейбола",
      "💳 ➠ 🔐 ➠ 🏐",
      "payload",
      "390540012:LIVE:51828",
      "RUB",
      [
        {
          label: "volleyball",
          amount: 850 * 100,
        },
      ],
      { protect_content: true }
    );
  } else if (text === "💯 Rank") {
    // clear command
    await bot.deleteMessage(chatId, messageId);

    // Luci sticker
    await bot.sendSticker(
      chatId,
      "CAACAgIAAxkBAAEL675mHawiKvHHPUHAyB42vZV-1GLjowAC_AADIjeOBLcpK5tmtTJXNAQ"
    );

    // list of players by rank
    function userList(points, name) {
      return `
      💯- <u><b>Rank</b></u>
${
  userId === data.id.max
    ? `${points} ⇜ ${name} ${data.flow.max}♛`
    : `${data.pts.max} - Max ${data.flow.max}♛`
}
${
  userId === data.id.sveta
    ? `${points} ⇜ ${name} ${data.flow.sveta}`
    : `${data.pts.sveta} - Света ${data.flow.sveta}`
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
  userId === data.id.barca
    ? `${points} ⇜ ${name} ${data.flow.barca}`
    : `${data.pts.barca} - Барса ${data.flow.barca}`
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
  userId === data.id.nina
    ? `${points} ⇜ ${name} ${data.flow.nina}`
    : `${data.pts.nina} - Нина ${data.flow.nina}`
}
${
  userId === data.id.jane
    ? `${points} ⇜ ${name} ${data.flow.jane}`
    : `${data.pts.jane} - Жанин ${data.flow.jane}`
}
${
  userId === data.id.bd
    ? `${points} ⇜ ${name} ${data.flow.bd}`
    : `${data.pts.bd} - БД ${data.flow.bd}`
}
${
  userId === data.id.polly
    ? `${points} ⇜ ${name} ${data.flow.polly}`
    : `${data.pts.polly} - Полли ${data.flow.polly}`
}
${
  userId === data.id.tema
    ? `${points} ⇜ ${name} ${data.flow.tema}`
    : `${data.pts.tema} - Тёма ${data.flow.tema}`
}
${
  userId === data.id.max2
    ? `${points} ⇜ ${name} ${data.flow.max2}`
    : `${data.pts.max2} - Максим ${data.flow.max2}`
}
${
  userId === data.id.vera
    ? `${points} ⇜ ${name} ${data.flow.vera}`
    : `${data.pts.vera} - Вера ${data.flow.vera}`
}
${
  userId === data.id.vlad2
    ? `${points} ⇜ ${name} ${data.flow.vlad2}`
    : `${data.pts.vlad2} - Влад ${data.flow.vlad2}`
}
${
  userId === data.id.dante
    ? `${points} ⇜ ${name} ${data.flow.dante}`
    : `${data.pts.dante} - Данте ${data.flow.dante}`
}
${
  userId === data.id.mario
    ? `${points} ⇜ ${name} ${data.flow.mario}`
    : `${data.pts.mario} - Марио ${data.flow.mario}`
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
    `;
    }

    // strong focus on current user
    function userFocus() {
      if (userId === data.id.max) {
        return userList(
          `<strong>${data.pts.max}</strong>`,
          "<strong>Max</strong>"
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
      } else if (userId === data.id.bd) {
        return userList(
          `<strong>${data.pts.bd}</strong>`,
          "<strong>БД</strong>"
        );
      } else if (userId === data.id.mario) {
        return userList(
          `<strong>${data.pts.mario}</strong>`,
          "<strong>Марио</strong>"
        );
      } else if (userId === data.id.max2) {
        return userList(
          `<strong>${data.pts.max2}</strong>`,
          "<strong>Максим</strong>"
        );
      } else if (userId === data.id.vlad2) {
        return userList(
          `<strong>${data.pts.vlad2}</strong>`,
          "<strong>Влад</strong>"
        );
      }
    }

    const list = userFocus();

    // table ranks
    await bot.sendMessage(chatId, list, {
      parse_mode: "HTML",
    });
  } else if (text === "😈 PH") {
    // clear command
    await bot.deleteMessage(chatId, messageId);

    await bot.sendSticker(
      chatId,
      "CAACAgIAAxkBAAEMMyZmUm0FARF0YgcVclh_ILxGUJBrnwAC-QADIjeOBJnA-6uUX_VsNQQ"
    );

    await bot.sendMessage(chatId, "Загружаю хо-хо..");

    const video = "./src/video/ph1.mp4";
    await bot.sendVideo(chatId, video);
  } else if (text === "🌦 Weather") {
    // clear command
    await bot.deleteMessage(chatId, messageId);

    // forecast mini app
    const fetchData = async () => {
      // api
      const storage = {
        city: "Saint-Petersburg",
      };
      const apiKey = "bd7c6ee5039741bd911165753242901";
      const urlForecast = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${storage.city}&days=3`;

      // getting data
      const response = await fetch(`${urlForecast}`);
      const data = await response.json();

      // today data
      const maxTemp = data.forecast.forecastday[0].day.maxtemp_c;
      const minTemp = data.forecast.forecastday[0].day.mintemp_c;
      const windMax = data.forecast.forecastday[0].day.maxwind_kph;
      const UV = data.forecast.forecastday[0].day.uv;

      // tommorrow data
      const maxTempT = data.forecast.forecastday[1].day.maxtemp_c;
      const minTempT = data.forecast.forecastday[1].day.mintemp_c;
      const windMaxT = data.forecast.forecastday[1].day.maxwind_kph;
      const UVT = data.forecast.forecastday[1].day.uv;

      // after tommorrow data
      const maxTempAT = data.forecast.forecastday[2].day.maxtemp_c;
      const minTempAT = data.forecast.forecastday[2].day.mintemp_c;
      const windMaxAT = data.forecast.forecastday[2].day.maxwind_kph;
      const UVAT = data.forecast.forecastday[2].day.uv;

      const results = `
      <strong>Сегодня</strong>
🌡️ ${maxTemp}° / ${minTemp}° | ${
        UV <= 5 ? `☀️ ${UV} uv` : `🔥 ${UV} uv`
      } | 🍃 ${Math.round(windMax / 3.6)} м/с`;

      const resultsT = `
      <strong>Завтра</strong>
🌡️ ${maxTempT}° / ${minTempT}° | ${
        UV <= 5 ? `☀️ ${UVT} uv` : `🔥 ${UVT} uv`
      } | 🍃 ${Math.round(windMaxT / 3.6)} м/с`;

      const resultsAT = `
      <strong>Послезавтра</strong>
🌡️ ${maxTempAT}° / ${minTempAT}° | ${
        UV <= 5 ? `☀️ ${UVAT} uv` : `🔥 ${UVAT} uv`
      } | 🍃 ${Math.round(windMaxAT / 3.6)} м/с`;

      // it was a spot for dynamic weather emoji ;(
      await bot.sendSticker(
        chatId,
        "CAACAgIAAxkBAAEMMxxmUmGmQRB2bFH1I2BvKYzncnNWgQAC7wADIjeOBLJlnQodNw85NQQ"
      );

      // today weather
      await bot.sendMessage(chatId, results, {
        parse_mode: "HTML",
      });
      // tommorrow weather
      await bot.sendMessage(chatId, resultsT, {
        parse_mode: "HTML",
      });
      // after tommorrow weather
      await bot.sendMessage(chatId, resultsAT, {
        parse_mode: "HTML",
      });
    };
    fetchData();
  } else if (text === "🎰ฅᨐᵉᵒʷ") {
    // clear command
    await bot.deleteMessage(chatId, messageId);

    // Gambling
    await bot.sendDice(chatId, { emoji: "🎲" });
  }
});
