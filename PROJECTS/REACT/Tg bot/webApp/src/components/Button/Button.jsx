import { useTelegram } from "../../hooks/useTelegram";
import "./Button.css";

export const Button = () => {
  const { onMark } = useTelegram();

  return <button className={"button"} onClick={onMark}></button>;
};
