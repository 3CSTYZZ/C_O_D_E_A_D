import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { Header } from "./components/Header/Header";
import { Chart } from "./components/Chart/Chart";
import { Button } from "./components/Button/Button";
import "./App.css";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Button onClick={onToggleButton} text={"Toggle"}></Button>
      <Chart />
    </div>
  );
}

console.log(useTelegram().tg.colorScheme);
export default App;
