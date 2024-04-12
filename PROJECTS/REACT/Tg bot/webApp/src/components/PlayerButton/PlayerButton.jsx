import { useTelegram } from "../../hooks/useTelegram";
import "./PlayerButton.css";
import "../../../public/sounds/urr-cute.mp3";

export const PlayerButton = () => {
  const { handleClick } = useTelegram();

  return (
    <>
      <span> player </span>
      <button
        className={"cat hvr-wobble-horizontal levitate"}
        onClick={handleClick}
      >
        {" "}
        ฅ/ᐠ‸⑅‸ ᐟ\ฅﾉ ᵖᵘʳʳ
      </button>
      <audio id="meow">
        <source src={"/sounds/urr-cute.mp3"} type="audio/mp3" />
      </audio>
    </>
  );
};
