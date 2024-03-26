// dark theme
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { Header } from "./components/Header/Header";
import { Chart } from "./components/Chart/Chart";
import "./App.css";

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const { tg } = useTelegram();

  return (
    <>
      <Header />
      <Chart />
    </>
  );
}

export default App;
