import { useTelegram } from "../../hooks/useTelegram";
import "./Button.css";

export const Button = () => {
  const { onMark } = useTelegram();

  return (
    <button className={"button"} onClick={onMark}>
      <img
        src="../../../src/img/icons8-question-mark-50.png"
        alt=""
        className={"qa"}
      />
    </button>
  );
};
