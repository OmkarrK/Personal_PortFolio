import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/education' element={<Education></Education>}></Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
