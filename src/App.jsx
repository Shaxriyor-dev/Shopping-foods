import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog.jsx";
import Menu from "./components/Menu.jsx";
import Contend from "./components/Contend.jsx";
import Pricing from "./components/Pricing.jsx";
import Footer from "./components/Footer.jsx";
import Home from './pages/Home.jsx';

function App() {
  return (
    <div className="bg-[#F9F9F9]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contend />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
