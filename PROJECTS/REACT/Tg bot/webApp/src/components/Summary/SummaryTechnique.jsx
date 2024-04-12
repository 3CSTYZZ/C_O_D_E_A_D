import { dataset } from "../../data/dataset";
import { useTelegram } from "../../hooks/useTelegram";
import "./Summary.css";

const { storage } = dataset();
const { user } = useTelegram();

export const SummaryTechnique = () => {
  return (
    <>
      {/* Max */}
      {user?.username === "ecstvzz" && (
        <span className="summary__mark">{storage[0].max[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[1].tema[4]}</span>
      )}

      {/* Max */}
      {user?.username === "ecstvzz" && (
        <span className="summary__mark">{storage[2].fedya[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[3].barca[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[4].jane[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[5].nina[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[6].sveta[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[7].paul[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[8].alex[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[9].gleb[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[10].polly[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[11].anya[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[12].ox[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[13].samu[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[14].bd[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[15].jenya[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[16].vera[4]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[17].dante[4]}</span>
      )}
    </>
  );
};
