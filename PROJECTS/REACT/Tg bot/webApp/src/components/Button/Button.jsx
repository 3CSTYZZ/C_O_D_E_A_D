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
      <div className="spinner"></div>
      {isShown && (
        <div className={"tooltip"}>
          <ul className={"list"}>
            <li className={"item"}>
              Tier-
              <span className="rank">S</span>: 65+ pts
            </li>
            <li className={"item"}>
              Tier-
              <span className="rank">A</span>: 60+ pts
            </li>
            <li className={"item"}>
              Tier-
              <span className="rank">B</span>: 55+ pts
            </li>
            <li className={"item"}>
              Tier-
              <span className="rank">C</span>: 50+ pts
            </li>
          </ul>

          {user?.username === "ecstvzz" && (
            <div className={"total"}>Total: 72 pts</div>
          )}
        </div>
      )}
    </>
  );
};
