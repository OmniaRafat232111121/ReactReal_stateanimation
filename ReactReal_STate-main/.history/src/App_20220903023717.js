import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
<div className="App">
 <Navbar/>
 <Hero slides={Sl}/>
    </div>
  );
}

export default App;
