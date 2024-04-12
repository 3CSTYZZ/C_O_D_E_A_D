import { dataset } from "../../data/dataset";
import { useTelegram } from "../../hooks/useTelegram";
import "./Summary.css";

const { storage } = dataset();
const { user } = useTelegram();

export const SummaryStrength = () => {
  return (
    <>
      {/* Max */}
      {user?.username === storage[0].id &&
        (storage[0].max[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[0].max[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[0].max[0]}</span>
        ))}

      {/* Tema */}
      {user?.username === storage[1].id &&
        (storage[1].tema[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[1].tema[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[1].tema[0]}</span>
        ))}

      {/* Fedya */}
      {user?.username === storage[2].id &&
        (storage[2].fedya[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[2].fedya[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[2].fedya[0]}</span>
        ))}

      {/* Barca */}
      {user?.username === storage[3].id &&
        (storage[3].barca[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[3].barca[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[3].barca[0]}</span>
        ))}

      {/* Jane */}
      {user?.username === storage[4].id &&
        (storage[4].jane[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[4].jane[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[4].jane[0]}</span>
        ))}

      {/* Nina */}
      {user?.username === storage[5].id &&
        (storage[5].nina[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[5].nina[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[5].nina[0]}</span>
        ))}

      {/* Sveta */}
      {user?.username === storage[6].id &&
        (storage[6].sveta[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[6].sveta[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[6].sveta[0]}</span>
        ))}

      {/* Paul */}
      {user?.username === storage[7].id &&
        (storage[7].paul[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[7].paul[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[7].paul[0]}</span>
        ))}

      {/* Sasha */}
      {user?.username === storage[8].id &&
        (storage[8].alex[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[8].alex[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[8].alex[0]}</span>
        ))}

      {/* Gleb */}
      {user?.username === storage[9].id &&
        (storage[9].gleb[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[9].gleb[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[9].gleb[0]}</span>
        ))}

      {/* Polly */}
      {user?.username === storage[10].id &&
        (storage[10].polly[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[10].polly[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[10].polly[0]}</span>
        ))}

      {/* Anya */}
      {user?.username === storage[11].id &&
        (storage[11].anya[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[11].anya[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[11].anya[0]}</span>
        ))}

      {/* Oxana */}
      {user?.username === storage[12].id &&
        (storage[12].ox[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[12].ox[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[12].ox[0]}</span>
        ))}

      {/* Samurai */}
      {user?.username === storage[13].id &&
        (storage[13].samu[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[13].samu[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[13].samu[0]}</span>
        ))}

      {/* BD */}
      {user?.username === storage[14].id &&
        (storage[14].bd[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[14].bd[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[14].bd[0]}</span>
        ))}

      {/* Janya */}
      {user?.username === storage[15].id &&
        (storage[15].jenya[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[15].jenya[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[15].jenya[0]}</span>
        ))}

      {/* Vera */}
      {user?.username === storage[16].id &&
        (storage[16].vera[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[16].vera[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[16].vera[0]}</span>
        ))}

      {/* Dante */}
      {user?.username === storage[17].id &&
        (storage[17].dante[0] === 10 ? (
          <span className="summary__mark summary__mark--max">
            {storage[17].dante[0]}
          </span>
        ) : (
          <span className="summary__mark">{storage[17].dante[0]}</span>
        ))}
    </>
  );
};
