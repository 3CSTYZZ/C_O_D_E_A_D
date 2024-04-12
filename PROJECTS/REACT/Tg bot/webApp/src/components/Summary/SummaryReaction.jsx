import { dataset } from "../../data/dataset";
import { useTelegram } from "../../hooks/useTelegram";
import "./Summary.css";

const { storage } = dataset();
const { user } = useTelegram();

export const SummaryReaction = () => {
  return (
    <>
      {/* Max */}
      {user?.username === "ecstvzz" && (
        <span className="summary__mark">{storage[0].max[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[1].tema[2]}</span>
      )}

      {/* Max */}
      {user?.username === "ecstvzz" && (
        <span className="summary__mark">{storage[2].fedya[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[3].barca[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[4].jane[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[5].nina[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[6].sveta[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[7].paul[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[8].alex[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[9].gleb[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[10].polly[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[11].anya[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[12].ox[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[13].samu[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[14].bd[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[15].jenya[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[16].vera[2]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[17].dante[2]}</span>
      )}
    </>
  );
};
