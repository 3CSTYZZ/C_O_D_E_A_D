import { useTelegram } from "../../hooks/useTelegram";
import { Button } from "../Button/Button";
import { dataset } from "../../data/dataset";
import "./Header.css";

export const Header = () => {
  const { user } = useTelegram();
  const { storage } = dataset();

  return (
    <div className={"header"}>
      <span className={"username"}>
        {user?.username === "ecstvzz"
          ? user?.username +
            " is " +
            <span className={"tier"}>{storage[0].tier}</span> +
            " player"
          : null}
        {user?.username === "pavelfedotov99"
          ? user?.username + " is " + storage[7].tier + " player"
          : null}
      </span>
      <Button text={"?"}></Button>
    </div>
  );
};
