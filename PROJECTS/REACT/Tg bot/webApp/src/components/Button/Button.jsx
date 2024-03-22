import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "./Button.css";

export const Button = () => {
  const [isShown, setIsShown] = useState(false);
  const { user } = useTelegram();

  const onTooltip = () => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <button className={"button"} onClick={onTooltip}></button>
      {isShown && (
        <div className={"tooltip"}>
          <ul className={"list"}>
            <li className={"item"}>Tier-S: 65+ pts</li>
            <li className={"item"}>Tier-A: 60+ pts</li>
            <li className={"item"}>Tier-B: 55+ pts</li>
            <li className={"item"}>Tier-C: 50+ pts</li>
          </ul>

          {user?.username === "3cstvzz" && (
            <div className={"total"}>Total: 72 pts</div>
          )}
        </div>
      )}
    </>
  );
};
