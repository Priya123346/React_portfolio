import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import {Projects} from './components/Projects';
import  {Contact, Footer} from './components/Contact';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
