import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Homepage from './components/Homepage';
import EndlessRacingGamePage from './components/endless-racing-game/EndlessRacingGamePage';
import SnakeGamePage from './components/snake-game/SnakeGamePage';

function App() {
  return (
    <> 
    <Routes> 

      <Route 
        path='/'
        element={<Homepage/>}
      /> 

      <Route 
        path='/snake-game'
        element={<SnakeGamePage/>}
      /> 

      <Route 
        path='/endless-racer'
        element={<EndlessRacingGamePage/>}
      /> 
      

     {/* Unsure if I need to include this div*/}
        {/* <div className="App"> */}
        {/* </div> */}
    </Routes>
    </>
  
  );
}

export default App;
