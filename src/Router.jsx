import { Route, Routes } from "react-router-dom";
import { Off } from "./pages/Off";
import { On } from "./pages/On";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Off />} />
      <Route path="/Off" element={<Off />} />      
      <Route path="/On" element={<On />} />           
    </Routes>
  )
}