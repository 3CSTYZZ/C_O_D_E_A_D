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
        {/* Max */}
        {user?.username === "ecstvzz" && (
          <>
            <span>{user?.username} is </span>
            <span className="tier">{storage[0].tier}</span>
            <span> player ฅ/ᐠ‸⑅‸ ᐟ\ฅﾉ ᵖᵘʳʳ</span>
          </>
        )}

        <span>{user?.username} is </span>
        <span className="tier">{storage[0].tier}</span>
        <span> player ฅ/ᐠ‸⑅‸ ᐟ\ฅﾉ ᵖᵘʳʳ</span>

        {/* Pasha */}
        {user?.username === "pavelfedotov99" && (
          <>
            <span>{user?.username} is </span>
            <span className="tier">{storage[7].tier}</span>
            <span> player ฅ/ᐠ‸⑅‸ ᐟ\ฅﾉ ᵖᵘʳʳ</span>
          </>
        )}
      </span>

      <Button></Button>
    </div>
  );
};
