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
      <div className="position-relative">
         {/* <div className="position-absolute w-100" style={{ top: '-48%', left: '15%', overflow: 'visible', pointerEvents: 'none', zIndex: 5 }}>
            <svg width="500px" height="650px" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translateY(-50px)' }}>
               <path d="M16.8376 48.411C-11.2212 78.368 9.68102 130.856 53.1041 121.247C80.1149 117.056 94.3156 89.705 121.326 86.019C129.082 84.833 136.708 85.424 143.818 87.456C179.973 97.798 193.811 141.464 171.274 171.546C153.467 195.313 121.254 210.188 104.324 234.292C75.7889 279.137 105.558 336.975 151.952 355.293C152.815 355.635 153.664 355.999 154.504 356.395C204.46 379.783 246.762 341.883 283.43 356.112C301.617 363.169 311.073 378.93 317.869 391.126C335.779 423.271 317.039 466.026 343.504 502.464C346.15 506.108 361.079 524.866 383.106 525.379C401.669 525.813 414.391 515.35 422.66 501.54C432.291 485.452 430.688 474.193 440.087 459.28C445.27 451.054 451.799 444.241 466.494 441.752C488.858 437.964 499.493 454.256 535.718 437.989C571.942 421.722 575.339 365.243 575.603 361.529" stroke="#AB8254" strokeOpacity="0.4" strokeWidth="8" strokeMiterlimit="10" />
            </svg>
         </div> */}
         <div className="d-flex flex-column justify-content-center align-items-center text-center bg-crema" style={{ height: "calc(var(--vh, 1vh) * 100)", padding: "2rem", position: 'relative', zIndex: 1 }}>

            <div className="mb-4">
               <Logo />
            </div>
            <p className="mt-3 mb-5 fs-5 text-marron fw-medium" style={{ lineHeight: "1.3" }}>
               Encuentra carritos de café<br />
               locales y explora lo que ofrecen
            </p>
            <button
               className="btn btn-rojo fs-5 fw-bold p-3 mt-3 mb-3 w-100 rounded-pill" style={{ borderRadius: "13px" }}
               onClick={() => navigate("/explorar")}
            >
               Explora carritos cercanos a ti
            </button>
            <p className="fs-6 text-marron">
               ¿Tenés un carrito?{" "}
               <a
                  href="#"
                  className="text-rojo fw-medium text-decoration-none"
                  onClick={(e) => {
                     e.preventDefault();
                     navigate("/registrar");
                  }}
               >
                  Registralo
               </a>
            </p>
            <div className="position-absolute" style={{ bottom: '1.5rem' }}>
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
      </div>
   );
}

export default HomeScreen;
