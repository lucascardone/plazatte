import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginCarritoScreen from "./screens/LoginCarritoScreen";
import './styles/paleta.css';
import HomeScreen from "./screens/HomeScreen";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/registrar" element={<LoginCarritoScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
