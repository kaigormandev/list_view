import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Detail from './components/Detail';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='detail/:id' element={<Detail />} />
          </Route>
        </Routes>
      </Router>
    );
}

export default App;
