import { useTelegram } from "../../hooks/useTelegram";

export const PlayerButton = () => {
  const { handleClick } = useTelegram();

  return (
    <>
      {" "}
      <span> player </span>
      <button onClick={handleClick}> ฅ/ᐠ‸⑅‸ ᐟ\ฅﾉ ᵖᵘʳʳ</button>
      <audio id="meow">
        <source src="/src/sounds/urr-cute.mp3" type="audio/mp3" />
      </audio>
    </>
  );
};
