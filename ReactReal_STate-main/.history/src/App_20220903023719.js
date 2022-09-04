import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
<div className="App">
 <Navbar/>
 <Hero slides={SliderD}/>
    </div>
  );
}

export default App;
