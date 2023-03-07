import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Mqrs from './Components/mediaQuerries.js';
import Home from './Components/home.js';
import Zidx from './Components/zindex.js';
import AllLandscapes from './Components/parentEl.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/media-querries' element={<Mqrs />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='zidx' element={<Zidx />}></Route>
        <Route path="props" element={< AllLandscapes/>}></Route>
      </Routes>
    </>
  );
}

export default App;
