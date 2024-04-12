import { dataset } from "../../data/dataset";
import { useTelegram } from "../../hooks/useTelegram";
import "./Summary.css";

const { storage } = dataset();
const { user } = useTelegram();

export const SummarySpeed = () => {
  return (
    <>
      {/* Max */}
      {user?.username === "ecstvzz" && (
        <span className="summary__mark">{storage[0].max[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[1].tema[1]}</span>
      )}

      {/* Max */}
      {user?.username === "Amblig" && (
        <span className="summary__mark">{storage[2].fedya[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "vladoosssssss" && (
        <span className="summary__mark">{storage[3].barca[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "JanineErofeeva" && (
        <span className="summary__mark">{storage[4].jane[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "nbulavina" && (
        <span className="summary__mark">{storage[5].nina[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "antonets_svetlana" && (
        <span className="summary__mark">{storage[6].sveta[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "pavelfedotov99" && (
        <span className="summary__mark">{storage[7].paul[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "saaaaaaaaasha" && (
        <span className="summary__mark">{storage[8].alex[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "Glebporotikov" && (
        <span className="summary__mark">{storage[9].gleb[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "PolinaPorotikova" && (
        <span className="summary__mark">{storage[10].polly[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "anna_alekseevna2206" && (
        <span className="summary__mark">{storage[11].anya[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "oxxana0" && (
        <span className="summary__mark">{storage[12].ox[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "Evillcola" && (
        <span className="summary__mark">{storage[13].samu[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "krofly03" && (
        <span className="summary__mark">{storage[14].bd[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "eva_4li" && (
        <span className="summary__mark">{storage[15].jenya[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "V_SV06" && (
        <span className="summary__mark">{storage[16].vera[1]}</span>
      )}

      {/* Tema */}
      {user?.username === "jdlegendary" && (
        <span className="summary__mark">{storage[17].dante[1]}</span>
      )}
    </>
  );
};
