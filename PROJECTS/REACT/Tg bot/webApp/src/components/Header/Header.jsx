import { User } from "../User/User";
import { PlayerButton } from "../PlayerButton/PlayerButton";
import { InfoButton } from "../InfoButton/InfoButton";
import "./Header.css";
import "../../sounds/urr-cute.mp3";

export const Header = () => {
  return (
    <div className={"header"}>
      <span className={"username"}>
        <User></User>
        <PlayerButton></PlayerButton>
      </span>
      <InfoButton></InfoButton>
    </div>
  );
};
