import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Component/page/home';
import Navbar from './Component/navbar';
import About from './Component/page/about';
import Contact from './Component/page/contact';
import Taketest from './Component/page/taketest';
import Login from './Component/page/login';
import Footer from './Component/footer';
import './App.css'; // Ensure you import your CSS for transitions

function App() {
  return (
    <Router> {/* Wrap the entire routing logic with Router */}
      <Navbar />
      <PageTransitions /> {/* Handle transitions in this component */}
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

// This component handles the page transitions and uses useLocation
function PageTransitions() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={500} // Duration of the transition
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/taketest" element={<Taketest />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
