import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LoginCarritoScreen from "./screens/LoginCarritoScreen";
import './styles/paleta.css';
import HomeScreen from "./screens/HomeScreen";
import ExplorarScreen from "./screens/ExplorarScreen";
import PlazaInfoScreen from "./screens/PlazaInfoScreen";
import AdminScreen from "./screens/AdminScreen";
import { PageTransition } from "./componentes/PageTransition";

function AnimatedRoutes() {
   const location = useLocation();

   return (
      <AnimatePresence mode="wait">
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={
               <PageTransition variant="swipe">
                  <HomeScreen />
               </PageTransition>
            } />
            <Route path="/registrar" element={
               <PageTransition variant="swipe">
                  <LoginCarritoScreen />
               </PageTransition>
            } />
            <Route path="/explorar" element={
               <PageTransition variant="fade">
                  <ExplorarScreen />
               </PageTransition>
            } />
            <Route path="/plaza/:plazaId/info" element={
               <PageTransition variant="fade">
                  <PlazaInfoScreen />
               </PageTransition>
            } />
            <Route path="/admin" element={
               <PageTransition variant="swipe">
                  <AdminScreen />
               </PageTransition>
            } />
         </Routes>
      </AnimatePresence>
   );
}

function App() {
   return (
      <BrowserRouter>
         <AnimatedRoutes />
      </BrowserRouter>
   );
}

export default App;
