import { dataset } from "../../data/dataset";
import { useTelegram } from "../../hooks/useTelegram";
import "./Summary.css";

const { storage } = dataset();
const { user } = useTelegram();

export const SummaryMental = () => {
  return (
    <>
      {/* Max */}
      {user?.username === "ecstvzz" && (
        <span className="summary__mark">{storage[0].max[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[1].tema[7]}</span>
      )}

      {/* Max */}
      {user?.username === "ecstvzz" && (
        <span className="summary__mark">{storage[2].fedya[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[3].barca[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[4].jane[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[5].nina[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[6].sveta[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[7].paul[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[8].alex[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[9].gleb[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[10].polly[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[11].anya[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[12].ox[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[13].samu[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[14].bd[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[15].jenya[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[16].vera[7]}</span>
      )}

      {/* Tema */}
      {user?.username === "temasafonov" && (
        <span className="summary__mark">{storage[17].dante[7]}</span>
      )}
    </>
  );
};
