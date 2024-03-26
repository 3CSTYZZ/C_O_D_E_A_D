import { UserTier } from "../UserTier/UserTier";
import { PlayerButton } from "../PlayerButton/PlayerButton";
import { InfoButton } from "../InfoButton/InfoButton";
import "./Header.css";

export const Header = () => {
  return (
    <div className={"header"}>
      <span className={"username"}>
        <UserTier></UserTier>
        <PlayerButton></PlayerButton>
      </span>

      <InfoButton></InfoButton>
    </div>
  );
};
