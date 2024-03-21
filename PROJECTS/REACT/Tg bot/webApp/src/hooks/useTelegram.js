const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onMark = () => {
    console.log("yo");
  };

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    onMark,
  };
}
