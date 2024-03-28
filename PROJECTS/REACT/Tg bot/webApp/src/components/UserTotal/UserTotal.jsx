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

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <div className="tier">Total: {storage[1].total} pts</div>
      )}

      {/* Fedya */}
      {user?.username === "Amblig" && (
        <div className="tier">Total: {storage[2].total} pts</div>
      )}

      {/* Barca */}
      {user?.username === "vladoosssssss" && (
        <div className="tier">Total: {storage[3].total} pts</div>
      )}

      {/* Jane */}
      {user?.username === "JanineErofeeva" && (
        <div className="tier">Total: {storage[4].total} pts</div>
      )}

      {/* Nina */}
      {user?.username === "nbulavina" && (
        <div className="tier">Total: {storage[5].total} pts</div>
      )}

      {/* Sveta */}
      {user?.username === "antonets_svetlana" && (
        <div className="tier">Total: {storage[6].total} pts</div>
      )}

      {/* Paul */}
      {user?.username === "pavelfedotov99" && (
        <div className={"total"}>Total: {storage[7].total} pts</div>
      )}

      {/* Alex */}
      {user?.username === "saaaaaaaaasha" && (
        <div className={"total"}>Total: {storage[8].total} pts</div>
      )}

      {/* Gleb */}
      {user?.username === "Glebporotikov" && (
        <div className={"total"}>Total: {storage[9].total} pts</div>
      )}

      {/* Polly */}
      {user?.username === "PolinaPorotikova" && (
        <div className={"total"}>Total: {storage[10].total} pts</div>
      )}

      {/* Annushka */}
      {user?.username === "anna_alekseevna2206" && (
        <div className={"total"}>Total: {storage[11].total} pts</div>
      )}

      {/* Oxana */}
      {user?.username === "oxxana0" && (
        <div className={"total"}>Total: {storage[12].total} pts</div>
      )}

      {/* Samurai */}
      {user?.username === "Evillcola" && (
        <div className={"total"}>Total: {storage[13].total} pts</div>
      )}

      {/* BD */}
      {user?.username === "krofly03" && (
        <div className={"total"}>Total: {storage[14].total} pts</div>
      )}

      {/* Jenya */}
      {user?.username === "eva_4li" && (
        <div className={"total"}>Total: {storage[15].total} pts</div>
      )}

      {/* Vera */}
      {user?.username === "V_SV06" && (
        <div className={"total"}>Total: {storage[16].total} pts</div>
      )}

      {/* Dante */}
      {user?.username === "jdlegendary" && (
        <div className={"total"}>Total: {storage[17].total} pts</div>
      )}
    </>
  );
};
