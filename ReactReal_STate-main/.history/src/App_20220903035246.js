import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SliderData } from './Data/SliderData';
import Global

function App() {
  return (
<div className="App">
 <GlobaStyle/>
<Navbar/>
 <Hero slides={SliderData} />
    </div>
  );
}

export default App;
