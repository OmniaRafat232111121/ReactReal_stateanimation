import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SliderData } from './Data/SliderData';
import globalStyle from '../globalStyle'

function App() {
  return (
<div className="App">
 <globaStyle/>
<Navbar/>
 <Hero slides={SliderData} />
    </div>
  );
}

export default App;
