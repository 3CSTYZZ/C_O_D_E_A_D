import { useTelegram } from "../../hooks/useTelegram";
import { Button } from "../InfoButton/InfoButton";
import { dataset } from "../../data/dataset";
import { PlayerButton } from "../PlayerButton/PlayerButton";
import { User } from "../User/User";
import "./Header.css";
import "../../sounds/urr-cute.mp3";

export const Header = () => {
  const { user } = useTelegram();
  const { storage } = dataset();

  return (
    <div className={"header"}>
      <span className={"username"}>
        <User></User>
        <PlayerButton></PlayerButton>
      </span>
      <Button></Button>
    </div>
  );
};
