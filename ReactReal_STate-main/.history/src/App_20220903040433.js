import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SliderData } from './Data/SliderData';
import GlobalStyle from './GlobalStyle'

function App() {
  return (
<div className="App">

<Navbar/>
 <Hero slides={SliderData} />
    </div>
  );
}

export default App;
