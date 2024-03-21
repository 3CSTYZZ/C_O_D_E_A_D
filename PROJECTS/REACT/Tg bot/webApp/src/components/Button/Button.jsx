import { useTelegram } from "../../hooks/useTelegram";
import "./Button.css";

export const Button = ({ text }) => {
  const { onMark } = useTelegram();

  return (
    <button className={"button"} onClick={onMark}>
      {text}
    </button>
  );
};
