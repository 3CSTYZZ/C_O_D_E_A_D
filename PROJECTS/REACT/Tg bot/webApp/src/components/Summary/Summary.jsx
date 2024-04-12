import "./Summary.css";
import { dataset } from "../../data/dataset";

export const Summary = () => {
  const { storage } = dataset();

  return (
    <div className="summary">
      <h3 className="summary__title">Summary</h3>
      <ul className="summary__content">
        <li className="summary__item">
          <img className="summary__img" src="/src/img/gym.png" alt="strength" />
          {storage[0].max[0]}
        </li>
        <li className="summary__item">
          <img
            className="summary__img"
            src="/src/img/running.png"
            alt="speed"
          />
          {storage[0].max[1]}
        </li>
        <li className="summary__item">
          <img
            className="summary__img"
            src="/src/img/watch.png"
            alt="reaction"
          />
          {storage[0].max[2]}
        </li>
        <li className="summary__item">
          <img className="summary__img" src="/src/img/person.png" alt="jump" />
          {storage[0].max[3]}
        </li>
        <li className="summary__item">
          <img
            className="summary__img"
            src="/src/img/volleyball.png"
            alt="technique"
          />
          {storage[0].max[4]}
        </li>
        <li className="summary__item">
          <img
            className="summary__img"
            src="/src/img/healthy.png"
            alt="stamina"
          />
          {storage[0].max[5]}
        </li>
        <li className="summary__item">
          <img className="summary__img" src="/src/img/autism.png" alt="iq" />
          {storage[0].max[6]}
        </li>
        <li className="summary__item">
          <img
            className="summary__img"
            src="/src/img/meditation.png"
            alt="mental"
          />
          {storage[0].max[7]}
        </li>
      </ul>
    </div>
  );
};
