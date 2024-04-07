import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Events from './components/Event/Events';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Donate from "./components/Donate/Donate"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
  <Router>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/events" element={<Events />}/>
        <Route exact path="/gallery" element={<Gallery />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/donate" element={<Donate />}/>
        <Route exact path="/" element={<Home />}/>
      </Routes>
       <Footer />
      </Router>
    </div>
  );
}

export default App;
