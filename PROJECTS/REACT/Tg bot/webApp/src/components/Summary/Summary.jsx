import { useTelegram } from "../../hooks/useTelegram";
import { SummaryStrength } from "./SummaryStrength";
import { SummarySpeed } from "./SummarySpeed";
import { SummaryReaction } from "./SummaryReaction";
import { SummaryJump } from "./SummaryJump";
import { SummaryTechnique } from "./SummaryTechnique";
import { SummaryStamina } from "./SummaryStamina";
import { SummaryIq } from "./SummaryIq";
import { SummaryMental } from "./SummaryMental";
import "./Summary.css";

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
          <SummaryStrength />
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
          <SummarySpeed />
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
          <SummaryReaction />
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
          <SummaryJump />
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
          <SummaryTechnique />
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
          <SummaryStamina />
        </li>

        <li className="summary__item">
          {tg.colorScheme === "light" ? (
            <img className="summary__img" src="/img/autism.png" alt="iq" />
          ) : (
            <img className="summary__img" src="/img/autism-dark.png" alt="iq" />
          )}
          <SummaryIq />
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
          <SummaryMental />
        </li>
      </ul>
    </div>
  );
};
