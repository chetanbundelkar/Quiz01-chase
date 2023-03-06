import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import SideNavbar from './components/layout/SideNavbar';
import Chapter from './page/Chapter';
import Discus from './page/Discus';
import Explore from './page/Explore';
import Home from './page/Home';
import Level from './page/Level';
import Login from './page/Login';
import Register from './page/Register';
import Setting from './page/Setting';
import Subject from './page/Subject';
import Test from './page/Test';



function App() {

  return (
    <>
      <Router>
    
        {/* <Header /> */}
        <SideNavbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/chapter" element={<Chapter />} />
          <Route path="/level" element={<Level />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/test" element={<Test />} />
          <Route path="/discus" element={<Discus />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </SideNavbar>
      </Router>
    </>
  );
}

export default App;
