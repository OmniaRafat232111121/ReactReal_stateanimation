import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SliderData } from './Data/SliderData';

function App() {
  return (
<div className="App">
 <Navbar/>
 <Hero slides={SliderData} />
    </div>
  );
}

export default App;
