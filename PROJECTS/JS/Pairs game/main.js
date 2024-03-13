// <= layout >=
// функция создания контейнера с элементами
function createElements() {
  // elements
  const main = document.createElement("main");
  const section = document.createElement("section");
  const container = document.createElement("div");
  const title = document.createElement("title");
  const button = document.createElement("button");

  // styles
  main.classList.add("main");
  section.classList.add("section");
  container.classList.add("container");
  title.classList.add("title");
  title.textContent = "Cute Pairs";

  // structure
  document.body.append(container);
  container.append(title);

  // return elements
  return {
    container,
    button,
  };
}

// функция создания игрового поля
function createGrid(count) {
  // elements: game zone
  const container = document.querySelector(".container");
  const field = document.createElement("div");

  // styles: game zone
  field.classList.add("cards__field");

  // массив с перемешанными номерами
  const shuffleArr = shuffle(createPairsArr(8));

  // цикл создания карточки с рандомным номером
  for (i = 0; i < count; i++) {
    const card = document.createElement("button");
    card.classList.add("cards__button");
    card.textContent = shuffleArr[i];
    field.append(card);
  }

  container.append(field);
}

// <= Logic >=
// функция генерирующая массив парных чисел. count - количество пар
function createPairsArr(count) {
  const digitsArr = [];

  for (i = 1; i <= count; i++) {
    digitsArr.push(i);
    digitsArr.push(i);
  }

  return digitsArr;
}

// функция перемешивания массива. arr - массив чисел
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}

// функция инициализации
function launch() {
  // массив с кнопками
  const buttons = document.querySelectorAll("button");

  // массив для работы с данными
  let temp = [];

  // счётчик правильных ответов
  let correctAnswerCount = 0;

  // цикл обработки события нажатия всех кнопок на игровом поле
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      // скрыть/показать контент нажатой кнопки
      if (getComputedStyle(buttons[i]).fontSize === "0px") {
        buttons[i].style.fontSize = "80px";
      } else {
        buttons[i].style.fontSize = "0";
      }
      // добавляю во временную память контент кнопки и саму кнопку
      temp.push(buttons[i].textContent);
      temp.push(buttons[i]);

      // нажаты ли уже две кнопки на игровом поле
      if (temp.length === 4) {
        // равны ли значения двух нажатых кнопок
        if (temp[0] === temp[2]) {
          // визуальный акцент на правильных парах
          temp[1].classList.add("cards__button--change");
          temp[3].classList.add("cards__button--change");

          // блокирую правильно нажатые кнопки
          temp[1].disabled = true;
          temp[3].disabled = true;

          // обнуляю временный массив для манипуляций
          temp = [];

          // +1 к счётчику приавильных ответов
          correctAnswerCount++;

          // равно ли количество правильных ответов юзера количеству пар на игровом поле
          if (correctAnswerCount === buttons.length / 2) {
            // создание кнопки 'заново'
            const containerCard = document.querySelector(".container");

            const btn = document.createElement("button");
            const kitty = document.createElement("span");

            btn.classList.add("btn");
            btn.textContent = `Play again`;
            kitty.classList.add("kitty");
            kitty.textContent = "(=`ω´=)";

            containerCard.append(btn);
            btn.append(kitty);

            // создаю обработчик нажатия на кнопку для перезапуска игры
            btn.addEventListener("click", () => {
              // цикл скрытия всех значений у кнопок
              for (let i = 1; i < buttons.length; i++) {
                buttons[i].style.fontSize = "0";
              }

              // удаляю кнопку перезапуска игры
              const deleteBtn = document.querySelector(".btn");
              const parentBtn = deleteBtn.parentNode;
              parentBtn.removeChild(deleteBtn);

              // удаляю предыдущее игровое поле для создания нового далее
              const field = document.querySelector(".cards__field");
              const parentField = field.parentNode;
              parentField.removeChild(field);

              // создаю новое игровое поле
              createGrid(16);

              // запуск игры заново
              launch();
            });
          }

          // если первая кнопка не равна второй -> первая скрывается; вторая остаётся
        } else {
          temp[1].style.fontSize = "0";
          temp = [temp[2], temp[3]];
        }
      }
    });
  }
}

// route
document.addEventListener("DOMContentLoaded", () => {
  // создаю контейнер и приравниваю к переменной вызовом функции
  let gameElements = createElements();

  // создаю переменную с указанием количества карточек для поля 4х4
  let numberOfCards = 16;

  // добавляю на сайт главный контейнер
  document.body.append(gameElements.container);

  // создаю обработчик нажатия на кнопку для запуска игры
  gameElements.button.addEventListener("click", () => {
    // выключаю кнопку после её нажатия
    gameElements.button.disabled = true;
    // передаю занчение поля для ввода переменной для указания количества карточек на игровом поле
    numberOfCards = gameZone.input.value;
    // обнуляю поле для ввода
    gameElements.input.value = "";
  });

  // создаю новое игровое поле
  createGrid(numberOfCards);

  // запуск игры
  launch();
});
