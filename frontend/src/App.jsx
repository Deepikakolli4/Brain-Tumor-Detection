// // frontend/src/App.jsx
// import React from 'react';
// import Home from './pages/Home';
// import About from './pages/About';
// import './index.css';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <About />
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'; // or correct path
import Home from './pages/Home';   // if you have a home page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

