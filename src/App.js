import logo from './logo.svg';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from './component/Home';
import './App.css';
import AboutUs from './component/aboutUs/AboutUs';
import SegmentsServices from './component/segmentsServices/SegmentsServices';
import Industries from './component/industries/Industries';
import HowWeWork from './component/howWeWork/HowWeWork';
import OurServices from './component/ourServices/OurServices';
import OurValues from './component/ourValues/OurValues';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/segments-services" element={<SegmentsServices />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/our-values" element={<OurValues />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
