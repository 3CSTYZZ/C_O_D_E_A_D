document.addEventListener("DOMContentLoaded", () => {
  // default storage
  let storage = {
    city: "Saint-Petersburg",
  };

  // api
  const apiKey = "bd7c6ee5039741bd911165753242901";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${storage.city}`;
  const urlForecast = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${storage}`;

  // main route
  const app = document.getElementById("app");
  const renderHTML = () => {
    app.innerHTML = layout();
  };

  // icons
  const getImg = (condition) => {
    const value = condition.toLowerCase();

    switch (value) {
      case "sunny":
        return "sunny";
        break;

      case "clear":
        return "clear";
        break;

      case "partly cloudy":
        return "partly-cloudy";
        break;

      case "cloudy":
        return "cloudy";
        break;

      case "overcast":
        return "overcast";
        break;

      case "mist":
      case "fog":
      case "freezing fog":
        return "mist";
        break;

      case "patchy snow possible":
      case "blowing snow":
      case "freezing drizzle":
      case "heavy freezing drizzle":
      case "light snow":
      case "patchy moderate snow":
      case "moderate snow":
      case "patchy snow nearby":
        return "snow";
        break;

      case "patchy heavy snow":
      case "heavy snow":
      case "ice-pellets":
      case "light showers of ice pellets":
      case "moderate or heavy showers of ice pellets":
        return "ice-pellets";

      case "patchy rain possible":
      case "patchy light drizzle":
      case "light drizzle":
      case "light rain":
      case "patchy light rain":
      case "light rain shower":
      case "patchy rain nearby":
      case "patchy freezing drizzle nearby":
        return "patchy-rain";
        break;

      case "moderate rain":
      case "heavy rain":
      case "moderate rain at times":
      case "heavy rain at times":
      case "moderate or heavy rain shower":
      case "torrential rain shower":
      case "moderate or heavy rain in area with thunder":
        return "rain";
        break;

      case "moderate or heavy freezing rain":
      case "light freezing rain":
      case "light sleet":
      case "moderate or heavy freezing sleet":
      case "light sleet showers":
      case "moderate or heavy sleet showers":
      case "moderate or heavy snow showers":
      case "light snow showers":
      case "patchy freezing drizzle possible":
      case "patchy sleet possible":
      case "patchy sleet nearby":
      case "moderate or heavy snow in area with thunder":
        return "snow-rain";
        break;

      case "patchy light snow with thunder":
      case "moderate or heavy snow with thunder":
      case "patchy light snow in area with thunder":
        return "thunder-ice";
        break;

      case "patchy light rain with thunder":
      case "moderate or heavy rain with thunder":
      case "patchy light rain in area with thunder":
        return "thunder-rain";
        break;

      case "thundery outbreaks possible":
      case "thundery outbreaks in nearby":
        return "thunder";
        break;

      case "blizzard":
        return "rain-wind";
        break;

      default:
        return "overcast";
        break;
    }
  };

  // structure
  const layout = () => {
    const {
      city,
      temperature,
      windKph,
      condition,
      isDay,
      pressureIn,
      humidity,
      chanceRain,
      chanceSnow,
      sunrise,
      sunset,
    } = storage;

    const body = document.querySelector("body");
    const darkMode = isDay === 0 ? "dark-mode" : null;
    body.classList.toggle(darkMode);

    return `
  <!-- header with status bar -->
  <header class="header">
    <div class="header__bar ${darkMode ? "header__bar--dark" : null}">
      <div class="header__item">It's ${condition.toLowerCase()} in <span class="header__item--glow">${city}</span></div>
      <div class="header__item">It's ${condition.toLowerCase()} in <span class="header__item--glow">${city}</span></div>
      <div class="header__item">It's ${condition.toLowerCase()} in <span class="header__item--glow">${city}</span></div>
      <div class="header__item">It's ${condition.toLowerCase()} in <span class="header__item--glow">${city}</span></div>
      <div class="header__item">It's ${condition.toLowerCase()} in <span class="header__item--glow">${city}</span></div>
      <div class="header__item">It's ${condition.toLowerCase()} in <span class="header__item--glow">${city}</span></div>
      <div class="header__item">It's ${condition.toLowerCase()} in <span class="header__item--glow">${city}</span></div>
      <div class="header__item">It's ${condition.toLowerCase()} in <span class="header__item--glow">${city}</span></div>
      <div class="header__item">It's ${condition.toLowerCase()} in <span class="header__item--glow">${city}</span></div>
      <div class="header__item">It's ${condition.toLowerCase()} in <span class="header__item--glow">${city}</span></div>
    </div>
  </header>

  <main class="main">
    <!-- plates with main content -->
    <section class="section plates">
      <div class="container">
        <div class="plates__wrapper">
          <div id="plate1" class="plates__box ${
            darkMode ? "plates__box--dark" : null
          }">
            <hr class="plates__hr ${darkMode ? "plates__hr--dark" : null}" />
            <span id="temp" class="plates__content plates__content--up">Temperature</span>
            <span id="temp" class="plates__content plates__content--down">${temperature}°</span>
            <div id="plate1-eff" class="plates__box plates__box--eff ${
              darkMode ? "plates__box--dark plates__box--eff-dark" : null
            }">
              <hr class="plates__hr ${darkMode ? "plates__hr--dark" : null}" />
              <span id="temp" class="plates__content plates__content--up">Sunrise/Sunset</span>
              <span id="temp" class="plates__content plates__content--rise">${sunrise}</span>
              <span id="temp" class="plates__content plates__content--set">${sunset}</span>
            </div>
          </div>
          <div id="plate2" class="plates__box ${
            darkMode ? "plates__box--dark" : null
          }">
            <img
              src="../src/3d weather icons/${
                isDay === 1 ? "day/" : "night/"
              }${getImg(condition)}.png"
              alt=""
              class="plates__content plates__content--img"
            />
          </div>
          <div id="plate3" class="plates__box ${
            darkMode ? "plates__box--dark" : null
          }">
            <hr class="plates__hr ${darkMode ? "plates__hr--dark" : null}" />
            <span class="plates__content plates__content--up">Wind speed</span>
            <span class="plates__content plates__content--down">${windKph}</span>
            <div id="plate3-eff" class="plates__box plates__box--eff ${
              darkMode ? "plates__box--dark plates__box--eff-dark" : null
            }">
              <hr class="plates__hr ${darkMode ? "plates__hr--dark" : null}" />
              <span id="temp" class="plates__content plates__content--up">Pressure</span>
              <span id="temp" class="plates__content plates__content--down">${Math.round(
                pressureIn * 25.4
              )}mm</span>
            </div>
          </div>
          <div id="plate4" class="plates__box ${
            darkMode ? "plates__box--dark" : null
          }">
            <hr class="plates__hr ${darkMode ? "plates__hr--dark" : null}" />
            <span id="temp" class="plates__content plates__content--up">${
              temperature <= 0 ? "Snow chance" : "Rain chance"
            }</span>
            <span class="plates__content plates__content--down">${
              temperature <= 0 ? chanceSnow : chanceRain
            }</span>
            <div id="plate4-eff" class="plates__box plates__box--eff ${
              darkMode ? "plates__box--dark plates__box--eff-dark" : null
            }">
              <hr class="plates__hr ${darkMode ? "plates__hr--dark" : null}" />
              <span id="temp" class="plates__content plates__content--up">Humidity</span>
              <span id="temp" class="plates__content plates__content--down">${humidity}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- searching cities -->
    <section class="section search">
      <div class="container">
        <div class="search__wrapper ${darkMode && "search__wrapper--dark"}">
          <form id="form" class="search__form">
            <input
              id="input"
              type="text"
              class="seacrh__input ${darkMode && "search__input--dark"}"
              placeholder="Enter your city"
              required
            />
            <button class="seacrh__btn search__btn--bcg ${
              darkMode && "search__btn--dark search__btn--bcg-dark"
            }" id="btn">
              <img
                src="./src/img/favicon-cat.png"
                alt=""
                class="search__logo"
              />
              <span></span>
            </button>
            <audio src="./src/sounds/urr-cute.mp3" id="sound"></audio>
          </form>
        </div>
      </div>
    </section>

    <!-- falling stars animation -->
    <div class="bcg-stars">
      <div class="light x1"></div>
      <div class="light x2"></div>
      <div class="light x3"></div>
      <div class="light x4"></div>
      <div class="light x5"></div>
      <div class="light x6"></div>
      <div class="light x7"></div>
      <div class="light x8"></div>
      <div class="light x9"></div>
    </div>
  </main>
  `;
  };

  // getting data + render + functions
  const fetchData = async () => {
    try {
      // local storage
      const query = localStorage.getItem("query") || storage.city;
      const response = await fetch(`${url}&query=${query}`);
      const data = await response.json();
      const responseForecast = await fetch(`${urlForecast}&query=${query}`);
      const dataForecast = await responseForecast.json();

      // 400 request handler (incorrect input value)
      function handleError(response) {
        if (response.status === 400) {
          location.reload();
          localStorage.clear();
        } else {
          // handle other errors
        }
      }
      handleError(response);

      // api container
      const {
        current: {
          is_day: isDay,
          temp_c: temperature,
          wind_kph: windKph,
          pressure_in: pressureIn,
          condition: { text: condition },
          humidity,
        },
        location: { name },
      } = data;

      // api container (rain/snow chance)
      const {
        forecast: {
          forecastday: {
            [0]: {
              day: {
                daily_chance_of_rain: chanceRain,
                daily_chance_of_snow: chanceSnow,
              },
              astro: { sunrise, sunset },
            },
          },
        },
      } = dataForecast;

      // app container
      storage = {
        ...storage,
        city: name,
        isDay,
        temperature,
        windKph: `${windKph}km/h`,
        pressureIn,
        condition,
        humidity: `${humidity}%`,
        chanceRain: `${chanceRain}%`,
        chanceSnow: `${chanceSnow}%`,
        sunrise,
        sunset,
      };

      renderHTML();

      // 2nd layer of plate
      const plate1 = document.getElementById("plate1");
      const plate1Eff = document.getElementById("plate1-eff");
      const plate3 = document.getElementById("plate3");
      const plate3Eff = document.getElementById("plate3-eff");
      const plate4 = document.getElementById("plate4");
      const plate4Eff = document.getElementById("plate4-eff");

      function plateChange(plate, plateEff) {
        plate.addEventListener("click", () => {
          const direction = plate.classList.contains("active")
            ? (plateEff.classList.add("plates--effect-out"),
              plateEff.classList.remove("plates--effect-in"))
            : (plateEff.classList.add("plates--effect-in"),
              plateEff.classList.remove("plates--effect-out"));
          plate.classList.toggle("active", direction);
        });
      }

      plateChange(plate1, plate1Eff);
      plateChange(plate3, plate3Eff);
      plateChange(plate4, plate4Eff);

      // searching form
      const form = document.getElementById("form");
      const input = document.getElementById("input");
      const btn = document.getElementById("btn");

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (input.value === "" || input.value === null) {
          return false;
        }
        const value = storage.city;
        localStorage.setItem("query", value);

        fetchData();
      });

      input.addEventListener("input", (e) => {
        storage = {
          ...storage,
          city:
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
        };
      });

      btn.addEventListener("click", () => {
        if (input.value === "" || input.value === null) {
          return false;
        }
        fetchData();
      });

      // playing sound from tag
      function catSpeech() {
        const music = document.getElementById("sound");
        music.play();
      }
      catSpeech();
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
});
