import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Homepage from './components/Homepage';
import EndlessRacingGamePage from './components/endless-racing-game/EndlessRacingGamePage';
import SnakeGamePage from './components/snake-game/SnakeGamePage';
import SnakeGame from './components/snake-game/SnakeGame';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/snake-game" element={<SnakeGamePage />} />
        <Route path="/snake-game/play" element={<SnakeGame />} />
        <Route path="/endless-racer" element={<EndlessRacingGamePage />} />
      </Routes>
    </div>
  );
}

export default App;
