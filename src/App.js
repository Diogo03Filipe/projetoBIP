import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import CityCenter from './components/zakliczyn/cityCenter';
import Melsztyn from './components/melsztyn/melsztyn';
import MusicCenter from './components/musicCenter/MusicCenter';
import EuroveloMotesk from './components/euroveloMotesk/EuroveloMotesk';
import StIdzi from './components/StIdzi/StIdzi';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="zaklinczyn/cityCenter" element={<CityCenter />} />
        <Route path="melsztyn/melsztyn" element={<Melsztyn />} />
        <Route path="musicCenter/MusicCenter" element={<MusicCenter />} />
        <Route path="euroveloMotesk/EuroveloMotesk" element={<EuroveloMotesk />} />
        <Route path="StIdzi/StIdzi" element={<StIdzi />} />
      </Routes>
    </Router>
  );
};

export default App;