import {Routes, Route} from 'react-router-dom'
import Navbars from './components/Navbars';
import footer from './components/footer';
import Home from './pages/Home';
import Kelas from './pages/Kelas';
import Testimonial from './pages/Testimonial';
import faqpage from './pages/faqpage';
import snk from './pages/snk';

function App() {
   return (
   <div> 
    <Navbars />
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/kelas" Component={Kelas}/>
      <Route path="/testimonial" Component={Testimonial}/>
      <Route path="/faq" Component={faqpage}/>
      <Route path="/snk" Component={snk}/>
    </Routes>
    <Footer />
   </div> 
   );
}

export default App