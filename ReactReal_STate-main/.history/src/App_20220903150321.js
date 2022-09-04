import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyle from './GlobalStyle';
import Best from './components/Best/Best';
function App() {
  return (
<div className="App">
<GlobalStyle/>
<Navbar/>
<Hero />

    </div>
  );
}

export default App;
