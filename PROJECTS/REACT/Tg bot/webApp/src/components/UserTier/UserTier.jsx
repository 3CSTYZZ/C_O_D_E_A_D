import { useTelegram } from "../../hooks/useTelegram";
import { dataset } from "../../data/dataset";
import "./UserTier.css";

export const UserTier = () => {
  const { user } = useTelegram();
  const { storage } = dataset();

  return (
    <>
      {/* Max */}
      {user?.username === storage[0].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[0].tier}</span>
        </>
      )}

      {/* Tema */}
      {user?.username === storage[1].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[1].tier}</span>
        </>
      )}

      {/* Fedya */}
      {user?.username === storage[2].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[2].tier}</span>
        </>
      )}

      {/* Barca */}
      {user?.username === storage[3].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[3].tier}</span>
        </>
      )}

      {/* Jane */}
      {user?.username === storage[4].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[4].tier}</span>
        </>
      )}

      {/* Nina */}
      {user?.username === storage[5].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[5].tier}</span>
        </>
      )}

      {/* Sveta */}
      {user?.username === storage[6].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[6].tier}</span>
        </>
      )}

      {/* Paul */}
      {user?.username === storage[7].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[7].tier}</span>
        </>
      )}

      {/* Alex */}
      {user?.username === storage[8].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[8].tier}</span>
        </>
      )}

      {/* Gleb */}
      {user?.username === storage[9].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[9].tier}</span>
        </>
      )}

      {/* Polly */}
      {user?.username === storage[10].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[10].tier}</span>
        </>
      )}

      {/* Annushka */}
      {user?.username === storage[11].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[11].tier}</span>
        </>
      )}

      {/* Oxana */}
      {user?.username === storage[12].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[12].tier}</span>
        </>
      )}

      {/* Samurai */}
      {user?.username === storage[13].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[13].tier}</span>
        </>
      )}

      {/* BD */}
      {user?.username === storage[14].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[14].tier}</span>
        </>
      )}

      {/* Jenya */}
      {user?.username === storage[15].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[15].tier}</span>
        </>
      )}

      {/* Vera */}
      {user?.username === storage[16].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[16].tier}</span>
        </>
      )}

      {/* Dante */}
      {user?.username === storage[17].id && (
        <>
          <span>{user?.username} is </span>
          <span className="tier">{storage[17].tier}</span>
        </>
      )}
    </>
  );
};
