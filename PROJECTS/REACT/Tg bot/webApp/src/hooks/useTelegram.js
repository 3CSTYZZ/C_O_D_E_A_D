const tg = window.Telegram.WebApp;

export function useTelegram() {
  function handleClick() {
    const sound = document.getElementById("meow");
    sound.play();
  }

  function cssvar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
  }

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    handleClick,
    cssvar,
  };
}

