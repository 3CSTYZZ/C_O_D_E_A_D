import { dataset } from "../../data/dataset";
import { useTelegram } from "../../hooks/useTelegram";
import "./Summary.css";

const { storage } = dataset();
const { user } = useTelegram();

export const SummaryJump = () => {
  return (
    <>
      {/* Max */}
      {user?.username === "ecstvzz" && (
        <span className="summary__mark">{storage[0].max[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[1].tema[3]}</span>
      )}

      {/* Max */}
      {user?.username === "ecstvzz" && (
        <span className="summary__mark">{storage[2].fedya[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[3].barca[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[4].jane[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[5].nina[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[6].sveta[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[7].paul[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[8].alex[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[9].gleb[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[10].polly[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[11].anya[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[12].ox[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[13].samu[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[14].bd[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[15].jenya[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[16].vera[3]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[17].dante[3]}</span>
      )}
    </>
  );
};
