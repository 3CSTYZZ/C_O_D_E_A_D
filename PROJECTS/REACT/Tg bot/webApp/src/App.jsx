import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { Header } from "./components/Header/Header";
import { Chart } from "./components/Chart/Chart";
import { Summary } from "./components/Summary/Summary";
import "./App.css";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <Header />
      <Chart />
      <Summary />
    </>
  );
}

export default App;
