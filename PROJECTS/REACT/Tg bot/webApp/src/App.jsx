import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;
function App() {
  // forecast for 3 days
  const apiKey = "bd7c6ee5039741bd911165753242901";
  const forecast = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=07112&days=3`;

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <>
      <div className="App">
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}

export default App;
