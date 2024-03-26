import { useTelegram } from "../../hooks/useTelegram";
import { dataset } from "../../data/dataset";
import "./UserTier.css";

export const UserTier = () => {
  const { user } = useTelegram();
  const { storage } = dataset();

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

      {/* Annushka */}
      {user?.username === "anna_alekseevna2206" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[11].tier}</span>
        </>
      )}
    </>
  );
};
