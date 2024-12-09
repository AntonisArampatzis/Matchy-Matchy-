import "./App.css";
import StartScreen from "./pages/StartScreen";
import GameScreen from "./pages/GameScreen";
import WinScreen from "./pages/WinScreen";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartScreen />} /> {/* path="/" is  root route */}
          <Route path="/game" element={<GameScreen />} />
          <Route path="/win" element={<WinScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;