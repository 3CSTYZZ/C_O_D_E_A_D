import { useTelegram } from "../../hooks/useTelegram";
import "./Button.css";

export const Button = ({ text }) => {
  const { tg, onMark } = useTelegram();

  return (
    <>
      {tg.colorScheme === "light" ? (
        <button className={"button"} onClick={onMark}>
          {text}
        </button>
      ) : (
        <button className={"button-dark"} onClick={onMark}>
          {text}
        </button>
      )}
    </>
  );
};
