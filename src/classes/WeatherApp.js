import './../css/WeatherApp.css';
import HourCards from "./HourCards";
import DayCards from "./DayCards";




function App() {
  return (
    <div className="App">
      <HourCards />
      <DayCards />
    </div>
  );
}

export default App;
