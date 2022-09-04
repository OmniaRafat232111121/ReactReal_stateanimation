import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
//import { SliderData } from './Data/SliderData';
import GlobalStyle from './GlobalStyle';
import Best from './components/best/best';
function App() {
  return (
<div className="App">
<GlobalStyle/>
<Navbar/>
<Hero />
<Best/>
    </div>
  );
}

export default App;
