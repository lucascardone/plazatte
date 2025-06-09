import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../componentes/svgs/Logo";
import LoginSvg from "../componentes/svgs/LoginSvg";

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
         {/* <div className="position-absolute top-0">
            <svg width="431" height="230" viewBox="0 0 431 230" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M16.8376 -251.589C-11.2212 -221.632 9.68102 -169.144 53.1041 -178.753C80.1149 -182.944 94.3156 -210.295 121.326 -213.981C129.082 -215.167 136.708 -214.576 143.818 -212.544C179.973 -202.202 193.811 -158.536 171.274 -128.454C153.467 -104.687 121.254 -89.8123 104.324 -65.7083C75.7889 -20.8627 105.558 36.9752 151.952 55.2931C152.815 55.6346 153.664 55.9985 154.504 56.3948C204.46 79.7834 246.762 41.8828 283.43 56.1117C301.617 63.1689 311.073 78.9298 317.869 91.126C335.779 123.271 317.039 166.026 343.504 202.464C346.15 206.108 361.079 224.866 383.106 225.379C401.669 225.813 414.391 215.35 422.66 201.54C432.291 185.452 430.688 174.193 440.087 159.28C445.27 151.054 451.799 144.241 466.494 141.752C488.858 137.964 499.493 154.256 535.718 137.989C571.942 121.722 575.339 65.2432 575.603 61.5287" stroke="#AB8254" stroke-opacity="0.4" stroke-width="8" stroke-miterlimit="10" />
            </svg>
         </div> */}
         <div className="mb-4">
            <Logo />
         </div>
         <p className="mt-3 mb-5 fs-5 fw-medium" style={{ lineHeight: "1.3" }}>
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
               className="text-rojo fw-bolder text-decoration-none"
               onClick={(e) => {
                  e.preventDefault();
                  navigate("/registrar");
               }}
            >
               Registralo
            </a>
         </p>
         <div className="position-absolute bottom-0">
            <LoginSvg width={45} strokeWidth={6} />
            <a className="fw-medium text-decoration-none text-marron" style={{ marginLeft: '10px' }}
               onClick={(e) => {
                  e.preventDefault();
                  navigate("/admin");
               }}>
               Cambiar a administrador
            </a>
         </div>
      </div>
   );
}

export default HomeScreen;
