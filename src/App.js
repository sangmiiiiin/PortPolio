import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Index } from './pages/mainPage';
import { Layout } from './components/Layout';
import { ProjectDetail } from './pages/projectDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Index />} />
          <Route path='/project' element={<ProjectDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
