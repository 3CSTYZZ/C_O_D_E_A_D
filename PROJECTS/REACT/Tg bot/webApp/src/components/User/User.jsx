import { useTelegram } from "../../hooks/useTelegram";
import "./User.css";

export const User = () => {
  const { user } = useTelegram();

  return (
    <>
      {/* Max */}
      {user?.username === "ecstvzz" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[0].tier}</span>
        </>
      )}

      {/* Paul */}
      {user?.username === "pavelfedotov99" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[7].tier}</span>
        </>
      )}
    </>
  );
};
