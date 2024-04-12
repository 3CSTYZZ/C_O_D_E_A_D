import { dataset } from "../../data/dataset";
import { useTelegram } from "../../hooks/useTelegram";
import "./Summary.css";

const { storage } = dataset();
const { user } = useTelegram();

export const SummaryIq = () => {
  return (
    <>
      {/* Max */}
      {user?.username === storage[0].id && (
        <span className="summary__mark">{storage[0].max[6]}</span>
      )}

      {/* Tema */}
      {user?.username === storage[1].id && (
        <span className="summary__mark">{storage[1].tema[6]}</span>
      )}

      {/* Fedya */}
      {user?.username === storage[2].id && (
        <span className="summary__mark">{storage[2].fedya[6]}</span>
      )}

      {/* Barca */}
      {user?.username === storage[3].id && (
        <span className="summary__mark">{storage[3].barca[6]}</span>
      )}

      {/* Jane */}
      {user?.username === storage[4].id && (
        <span className="summary__mark">{storage[4].jane[6]}</span>
      )}

      {/* Nina */}
      {user?.username === storage[5].id && (
        <span className="summary__mark">{storage[5].nina[6]}</span>
      )}

      {/* Sveta */}
      {user?.username === storage[6].id && (
        <span className="summary__mark">{storage[6].sveta[6]}</span>
      )}

      {/* Paul */}
      {user?.username === storage[7].id && (
        <span className="summary__mark">{storage[7].paul[6]}</span>
      )}

      {/* Sasha */}
      {user?.username === storage[8].id && (
        <span className="summary__mark">{storage[8].alex[6]}</span>
      )}

      {/* Gleb */}
      {user?.username === storage[9].id && (
        <span className="summary__mark">{storage[9].gleb[6]}</span>
      )}

      {/* Polly */}
      {user?.username === storage[10].id && (
        <span className="summary__mark">{storage[10].polly[6]}</span>
      )}

      {/* Anya */}
      {user?.username === storage[11].id && (
        <span className="summary__mark">{storage[11].anya[6]}</span>
      )}

      {/* Oxana */}
      {user?.username === storage[12].id && (
        <span className="summary__mark">{storage[12].ox[6]}</span>
      )}

      {/* Samurai */}
      {user?.username === storage[13].id && (
        <span className="summary__mark">{storage[13].samu[6]}</span>
      )}

      {/* BD */}
      {user?.username === storage[14].id && (
        <span className="summary__mark">{storage[14].bd[6]}</span>
      )}

      {/* Janya */}
      {user?.username === storage[15].id && (
        <span className="summary__mark">{storage[15].jenya[6]}</span>
      )}

      {/* Vera */}
      {user?.username === storage[16].id && (
        <span className="summary__mark">{storage[16].vera[6]}</span>
      )}

      {/* Dante */}
      {user?.username === storage[17].id && (
        <span className="summary__mark">{storage[17].dante[6]}</span>
      )}
    </>
  );
};
