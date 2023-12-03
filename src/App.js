import './App.css';
import Navbar from '../src/components/Navbar';
import About from '../src/components/About';
import Menu from './components/Menu';
import Anggota from '../src/components/Anggota';
import './config/Firebase'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Menu />
      <Anggota />
    </>
  );
}

export default App;
