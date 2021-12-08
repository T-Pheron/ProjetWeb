import React from 'react';
import Home from './pages/Home';
import Historique from './pages/Historique';
import Notification from './pages/Notification';
import Consomation from './pages/Consomation';
import Error from './pages/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './pages/Admin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/historique" element={<Historique />} />
        <Route exact path="/notification" element={<Notification />} />
        <Route exact path="/consomation" element={<Consomation />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;