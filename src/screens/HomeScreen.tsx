import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../componentes/svgs/Logo";

function HomeScreen() {
   const navigate = useNavigate();

   // Ajuste para vh real en móviles
   useEffect(() => {
      const setVh = () => {
         const vh = window.innerHeight * 0.01;
         document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      setVh();
      window.addEventListener('resize', setVh);
      return () => window.removeEventListener('resize', setVh);
   }, []);

   return (
      <div className="d-flex flex-column justify-content-center align-items-center text-center bg-crema" style={{ height: "calc(var(--vh, 1vh) * 100)", padding: "2rem" }}>
         <div className="mb-4">
            <Logo />
         </div>
         <p className="mt-3 mb-5 fs-5 fw-medium">
            Encuentra carritos de café<br />
            locales y explora lo que ofrecen
         </p>
         <button
            className="btn btn-rojo fs-5 fw-bold p-3 mt-5 mb-3 w-100" style={{ borderRadius: "13px" }}
            onClick={() => navigate("/explorar")}
         >
            Explora carritos cercanos a ti
         </button>
         <p className="fs-6">
            ¿Tenés un carrito?{" "}
            <a
               href="#"
               className="text-rojo fw-bold text-decoration-none"
               onClick={(e) => {
                  e.preventDefault();
                  navigate("/registrar");
               }}
            >
               Registralo
            </a>
         </p>
      </div>
   );
}

export default HomeScreen;
