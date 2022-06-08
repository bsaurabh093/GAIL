import logo from './logo.svg';
import './App.css';
import  './assets/css/style.css';
import {Header} from './component/header';
import Footer from './component/footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
