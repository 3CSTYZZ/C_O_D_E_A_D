import { useState } from "react";
import { UserTotal } from "../UserTotal/UserTotal";
import "./InfoButton.css";

export const InfoButton = () => {
  const [isShown, setIsShown] = useState(false);

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

          <UserTotal />
        </div>
      )}
    </>
  );
};
