import './App.css';
import { Header } from './Components/Header.js';
import { Banner } from './Components/Banner.js';
import { Skills } from './Components/Skills.js';
import { Projects} from './Components/Projects.js';
import { Contact } from './Components/Contact.js';
import { Footer } from './Components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
