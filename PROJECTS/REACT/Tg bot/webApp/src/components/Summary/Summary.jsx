import { dataset } from "../../data/dataset";
import { useTelegram } from "../../hooks/useTelegram";
import "./Summary.css";

const { storage } = dataset();
const { tg } = useTelegram();

export const Summary = () => {
  return (
    <div className="summary">
      <h3 className="summary__title">Summary</h3>
      <ul className="summary__content">
        <li className="summary__item">
          {tg.colorScheme === "light" ? (
            <img className="summary__img" src="/img/gym.png" alt="strength" />
          ) : (
            <img
              className="summary__img"
              src="/img/gym-dark.png"
              alt="strength"
            />
          )}
          <span className="summary__mark">{storage[0].max[0]}</span>
        </li>

        <li className="summary__item">
          {tg.colorScheme === "light" ? (
            <img className="summary__img" src="/img/running.png" alt="speed" />
          ) : (
            <img
              className="summary__img"
              src="/img/running-dark.png"
              alt="speed"
            />
          )}
          <span className="summary__mark">{storage[0].max[1]}</span>
        </li>

        <li className="summary__item">
          {tg.colorScheme === "light" ? (
            <img className="summary__img" src="/img/timer.png" alt="reaction" />
          ) : (
            <img
              className="summary__img"
              src="/img/timer-dark.png"
              alt="reaction"
            />
          )}
          <span className="summary__mark">{storage[0].max[2]}</span>
        </li>

        <li className="summary__item">
          {tg.colorScheme === "light" ? (
            <img className="summary__img" src="/img/person.png" alt="jump" />
          ) : (
            <img
              className="summary__img"
              src="/img/person-dark.png"
              alt="jump"
            />
          )}
          <span className="summary__mark">{storage[0].max[3]}</span>
        </li>

        <li className="summary__item">
          {tg.colorScheme === "light" ? (
            <img
              className="summary__img"
              src="/img/volleyball.png"
              alt="technique"
            />
          ) : (
            <img
              className="summary__img"
              src="/img/volleyball-dark.png"
              alt="technique"
            />
          )}
          <span className="summary__mark">{storage[0].max[4]}</span>
        </li>

        <li className="summary__item">
          {tg.colorScheme === "light" ? (
            <img
              className="summary__img"
              src="/img/healthy.png"
              alt="stamina"
            />
          ) : (
            <img
              className="summary__img"
              src="/img/healthy-dark.png"
              alt="stamina"
            />
          )}
          <span className="summary__mark">{storage[0].max[5]}</span>
        </li>

        <li className="summary__item">
          {tg.colorScheme === "light" ? (
            <img className="summary__img" src="/img/autism.png" alt="iq" />
          ) : (
            <img className="summary__img" src="/img/autism-dark.png" alt="iq" />
          )}
          <span className="summary__mark">{storage[0].max[6]}</span>
        </li>

        <li className="summary__item">
          {tg.colorScheme === "light" ? (
            <img
              className="summary__img"
              src="/img/meditation.png"
              alt="mental"
            />
          ) : (
            <img
              className="summary__img"
              src="/img/meditation-dark.png"
              alt="mental"
            />
          )}
          <span className="summary__mark">{storage[0].max[7]}</span>
        </li>
      </ul>
    </div>
  );
};
