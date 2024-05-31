import { useTelegram } from "../../hooks/useTelegram";
import { dataset } from "../../data/dataset";
import "./UserTotal.css";

export const UserTotal = () => {
  const { user } = useTelegram();
  const { storage } = dataset();

  return (
    <>
      {/* Max */}
      {user?.username === storage[0].id && (
        <div className={"total"}>Total: {storage[0].total} pts</div>
      )}

      {/* Tema */}
      {user?.username === storage[1].id && (
        <div className="tier">Total: {storage[1].total} pts</div>
      )}

      {/* Fedya */}
      {user?.username === storage[2].id && (
        <div className="tier">Total: {storage[2].total} pts</div>
      )}

      {/* Barca */}
      {user?.username === storage[3].id && (
        <div className="tier">Total: {storage[3].total} pts</div>
      )}

      {/* Jane */}
      {user?.username === storage[4].id && (
        <div className="tier">Total: {storage[4].total} pts</div>
      )}

      {/* Nina */}
      {user?.username === storage[5].id && (
        <div className="tier">Total: {storage[5].total} pts</div>
      )}

      {/* Sveta */}
      {user?.username === storage[6].id && (
        <div className="tier">Total: {storage[6].total} pts</div>
      )}

      {/* Paul */}
      {user?.username === storage[7].id && (
        <div className={"total"}>Total: {storage[7].total} pts</div>
      )}

      {/* Mario */}
      {user?.username === storage[8].id && (
        <div className={"total"}>Total: {storage[8].total} pts</div>
      )}

      {/* Gleb */}
      {user?.username === storage[9].id && (
        <div className={"total"}>Total: {storage[9].total} pts</div>
      )}

      {/* Polly */}
      {user?.username === storage[10].id && (
        <div className={"total"}>Total: {storage[10].total} pts</div>
      )}

      {/* Annushka */}
      {user?.username === storage[11].id && (
        <div className={"total"}>Total: {storage[11].total} pts</div>
      )}

      {/* Oxana */}
      {user?.username === storage[12].id && (
        <div className={"total"}>Total: {storage[12].total} pts</div>
      )}

      {/* Samurai */}
      {user?.username === storage[13].id && (
        <div className={"total"}>Total: {storage[13].total} pts</div>
      )}

      {/* BD */}
      {user?.username === storage[14].id && (
        <div className={"total"}>Total: {storage[14].total} pts</div>
      )}

      {/* Jenya */}
      {user?.username === storage[15].id && (
        <div className={"total"}>Total: {storage[15].total} pts</div>
      )}

      {/* Vera */}
      {user?.username === storage[16].id && (
        <div className={"total"}>Total: {storage[16].total} pts</div>
      )}

      {/* Dante */}
      {user?.username === storage[17].id && (
        <div className={"total"}>Total: {storage[17].total} pts</div>
      )}

      {/* Max2 */}
      {user?.username === storage[18].id && (
        <div className={"total"}>Total: {storage[18].total} pts</div>
      )}

      {/* Vlad2 */}
      {user?.username === storage[19].id && (
        <div className={"total"}>Total: {storage[19].total} pts</div>
      )}
    </>
  );
};
