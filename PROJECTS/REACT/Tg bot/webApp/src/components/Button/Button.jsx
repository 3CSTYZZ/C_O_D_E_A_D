import { useState } from "react";
import "./Button.css";

export const Button = () => {
  const [isShown, setIsShown] = useState(false);

  const onTooltip = () => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <button className={"button"} onClick={onTooltip}></button>
      {isShown && (
        <div className={"tooltip"}>
          <ul className={"list"}>
            <li className={"item"}>Tier-S</li>
            <li className={"item"}>Tier-A</li>
            <li className={"item"}>Tier-B</li>
            <li className={"item"}>Tier-C</li>
          </ul>
        </div>
      )}
    </>
  );
};
