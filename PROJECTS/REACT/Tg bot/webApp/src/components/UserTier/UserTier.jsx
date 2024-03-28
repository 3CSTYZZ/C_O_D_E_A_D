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

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[1].tier}</span>
        </>
      )}

      {/* Fedya */}
      {user?.username === "Amblig" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[2].tier}</span>
        </>
      )}

      {/* Barca */}
      {user?.username === "vladoosssssss" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[3].tier}</span>
        </>
      )}

      {/* Jane */}
      {user?.username === "JanineErofeeva" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[4].tier}</span>
        </>
      )}

      {/* Nina */}
      {user?.username === "nbulavina" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[5].tier}</span>
        </>
      )}

      {/* Sveta */}
      {user?.username === "antonets_svetlana" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[6].tier}</span>
        </>
      )}

      {/* Paul */}
      {user?.username === "pavelfedotov99" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[7].tier}</span>
        </>
      )}

      {/* Alex */}
      {user?.username === "saaaaaaaaasha" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[8].tier}</span>
        </>
      )}

      {/* Gleb */}
      {user?.username === "Glebporotikov" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[9].tier}</span>
        </>
      )}

      {/* Polly */}
      {user?.username === "PolinaPorotikova" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[10].tier}</span>
        </>
      )}

      {/* Annushka */}
      {user?.username === "anna_alekseevna2206" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[11].tier}</span>
        </>
      )}

      {/* Oxana */}
      {user?.username === "oxxana0" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[12].tier}</span>
        </>
      )}

      {/* Samurai */}
      {user?.username === "Evillcola" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[13].tier}</span>
        </>
      )}

      {/* BD */}
      {user?.username === "krofly03" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[14].tier}</span>
        </>
      )}

      {/* Jenya */}
      {user?.username === "eva_4li" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[15].tier}</span>
        </>
      )}

      {/* Vera */}
      {user?.username === "V_SV06" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[16].tier}</span>
        </>
      )}

      {/* Dante */}
      {user?.username === "jdlegendary" && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[17].tier}</span>
        </>
      )}
    </>
  );
};
