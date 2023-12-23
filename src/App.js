import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from "./components/clock/Clock";
import Stopwatch from "./components/stopwatch/Stopwatch"
import Timer from './components/timer/Timer';
import { Routes, Route, Link, useNavigate } from "react-router-dom";







function App() {



  return (
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>




      </header>
    </div >
  );
}

export default App;
