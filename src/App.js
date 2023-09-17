import logo from './logo.svg';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from './component/Home';
import './App.css';
import AboutUs from './component/aboutUs/AboutUs';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about-us' element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
