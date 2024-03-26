import { useTelegram } from "../../hooks/useTelegram";
import { dataset } from "../../data/dataset";
import "./UserTotal.css";

export const UserTotal = () => {
  const { user } = useTelegram();
  const { storage } = dataset();

  return (
    <>
      {/* Max */}
      {user?.username === "ecstvzz" && (
        <div className={"total"}>Total: {storage[0].total} pts</div>
      )}

      {/* Paul */}
      {user?.username === "pavelfedotov99" && (
        <div className={"total"}>Total: {storage[7].total} pts</div>
      )}

      {/* Paul */}
      {user?.username === "anna_alekseevna2206" && (
        <div className={"total"}>Total: {storage[11].total} pts</div>
      )}
    </>
  );
};
