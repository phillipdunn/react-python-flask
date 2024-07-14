import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashBoard />} />
    </Routes>
  );
}

export default App;
