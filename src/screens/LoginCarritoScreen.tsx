import LoginSvg from "../componentes/svgs/LoginSvg";
import '../styles/paleta.css';
import CustomTextField from "../componentes/CustomTextField";
import { useState, useEffect } from "react";

function LoginCarritoScreen() {
   useEffect(() => {
      const setVh = () => {
         const vh = window.innerHeight * 0.01;
         document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      setVh();
      window.addEventListener('resize', setVh);
      return () => window.removeEventListener('resize', setVh);
   }, []);

   const [formData, setFormData] = useState({
      nombre: '',
      email: '',
      telefono: ''
   });

   const isFormComplete = () => {
      return formData.nombre.trim() !== '' &&
         formData.email.trim() !== '' &&
         formData.telefono.trim() !== '';
   };

   const handleInputChange = (field: string, value: string) => {
      setFormData(prev => ({
         ...prev,
         [field]: value
      }));
   };

   return (
      <div
         className="d-flex justify-content-center align-items-center"
         style={{
            backgroundImage: `url('/plaza_españa.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 'calc(var(--vh, 1vh) * 100)',
         }}
      >
         <div
            className="p-4 text-center"
            style={{
               height: '85vh',
               width: '85%',
               maxWidth: '400px',
               backgroundColor: 'rgba(251, 242, 231, 0.8)', // crema translúcido
               overflowY: 'hidden',
               maxHeight: 'calc(var(--vh, 1vh) * 90)'
            }}
         >
            <h1 className="text-marron fw-bold" style={{ marginTop: '2rem', marginBottom: '2rem' }}>Registra tu carrito</h1>
            <LoginSvg />
            <form style={{ marginTop: '3.5rem' }}>
               <div className="mb-3 text-start" style={{ width: '90%', alignContent: 'center', margin: '0 auto' }}>
                  <CustomTextField
                     label="Nombre"
                     value={formData.nombre}
                     onChange={(e) => handleInputChange('nombre', e.target.value)}
                  />
               </div>
               <div className="mb-3 text-start" style={{ width: '90%', alignContent: 'center', margin: '0 auto' }}>
                  <CustomTextField
                     label="Email"
                     value={formData.email}
                     onChange={(e) => handleInputChange('email', e.target.value)}
                  />
               </div>
               <div className="mb-4 text-start" style={{ width: '90%', alignContent: 'center', margin: '0 auto' }}>
                  <CustomTextField
                     label="Teléfono"
                     value={formData.telefono}
                     onChange={(e) => handleInputChange('telefono', e.target.value)}
                  />
               </div>
               <button
                  type="submit"
                  className="btn rounded-pill px-4 py-3 w-50 fw-bold"
                  style={{
                     marginTop: '4rem',
                     backgroundColor: 'transparent',
                     color: '#AC8354',
                     border: '4px solid #AC8354',
                     transition: 'all 0.3s ease',
                     ...(isFormComplete() && {
                        backgroundColor: '#AC8354',
                        color: 'white'
                     })
                  }}
               >
                  Enviar
               </button>
            </form>
         </div>
      </div>
   );
}

export default LoginCarritoScreen;
