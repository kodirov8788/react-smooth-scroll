import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';
import Rounds from './components/round/Rounds';
import Home2 from './components/Home2/Home2';
import Home3 from './components/Home3/Home3';



function App() {
  return (
    <div>
      <Navbar />
      <Rounds />
      <Home />
      <Blog />
      <Contact />
      <Service />
      <Home2 />
      <Home3 />
    </div>
  );
}

export default App;
