import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Off } from "./pages/Off";
import { On } from "./pages/On";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />      
      <Route path="/Off" element={<Off />} />      
      <Route path="/On" element={<On />} />           
    </Routes>
  )
}