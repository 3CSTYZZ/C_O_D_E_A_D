const tg = window.Telegram.WebApp;

export function useTelegram() {
  function handleClick() {
    const sound = document.getElementById("meow");
    sound.play();
  }

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    handleClick,
  };
}
