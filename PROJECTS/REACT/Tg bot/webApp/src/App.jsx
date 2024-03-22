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
      {tg.colorScheme === "light" ? (
        <div className={"App"}>
          <Header />
          <Chart />
        </div>
      ) : (
        <div className={"App-dark"}>
          <Header />
          <Chart />
        </div>
      )}
    </>
  );
}

export default App;
