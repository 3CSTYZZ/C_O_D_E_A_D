import { dataset } from "../../data/dataset";
import { useTelegram } from "../../hooks/useTelegram";
import "./Summary.css";

const { storage } = dataset();
const { user } = useTelegram();

export const SummaryStrength = () => {
  return (
    <>
      {/* Max */}
      {user?.username === "ecstvzz" && (
        <span className="summary__mark">{storage[0].max[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[1].tema[0]}</span>
      )}

      {/* Max */}
      {user?.username === "ecstvzz" && (
        <span className="summary__mark">{storage[2].fedya[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[3].barca[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[4].jane[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[5].nina[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[6].sveta[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[7].paul[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[8].alex[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[9].gleb[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[10].polly[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[11].anya[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[12].ox[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[13].samu[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[14].bd[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[15].jenya[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[16].vera[0]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[17].dante[0]}</span>
      )}
    </>
  );
};
