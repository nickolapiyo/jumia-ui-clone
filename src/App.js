import React from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;
