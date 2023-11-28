import './App.css';
import Navbar from '../src/components/Navbar';
import About from '../src/components/About';
import MIGORI from '../src/components/MIGORI';
import Order from '../src/components/Order';
import Anggota from '../src/components/Anggota';
import './config/Firebase'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <MIGORI />
      <Order />
      <Anggota />
    </>
  );
}

export default App;
