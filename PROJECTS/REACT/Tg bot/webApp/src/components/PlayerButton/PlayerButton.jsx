import { useTelegram } from "../../hooks/useTelegram";
import "./PlayerButton.css";
import "../../sounds/urr-cute.mp3";

export const PlayerButton = () => {
  const { handleClick } = useTelegram();

  return (
    <>
      <span> player </span>
      <button className={"cat hvr-wobble-horizontal"} onClick={handleClick}>
        {" "}
        ฅ/ᐠ‸⑅‸ ᐟ\ฅﾉ ᵖᵘʳʳ
      </button>
      <audio id="meow">
        <source src={"./src/sounds/urr-cute.mp3"} type="audio/mp3" />
      </audio>
    </>
  );
};
