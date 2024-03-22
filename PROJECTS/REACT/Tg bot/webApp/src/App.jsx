import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { Header } from "./components/Header/Header";
import { Chart } from "./components/Chart/Chart";
import "./App.css";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      {tg.colorScheme === "light" ? (
        <Header />
      ) : (
        <Header className={"dark-mode"} />
      )}
      <Chart />
    </div>
  );
}

console.log(useTelegram().tg.colorScheme);
export default App;
