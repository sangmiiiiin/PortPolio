import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Index } from './pages/mainPage/index';
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
