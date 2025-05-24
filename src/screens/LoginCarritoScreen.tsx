import LoginSvg from "../componentes/svgs/LoginSvg";
import '../styles/paleta.css';
import CustomTextField from "../componentes/CustomTextField";
import { useState } from "react";

function LoginCarritoScreen() {
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
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: `url('../../public/plaza_españa.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="p-4 text-center"
        style={{
          height: '90vh',
          width: '90%',
          maxWidth: '400px',
          backgroundColor: 'rgba(251, 242, 231, 0.9)', // crema translúcido
          overflowY: 'auto'
        }}
      >
        <h1 className="text-marron fw-bold" style={{ marginTop: '2rem', marginBottom: '2rem'}}>Registra tu carrito</h1>
        <LoginSvg />
        <form style={{ marginTop: '3.5rem' }}>
          <div className="mb-3 text-start">
            <CustomTextField 
              label="Nombre" 
              value={formData.nombre}
              onChange={(e) => handleInputChange('nombre', e.target.value)}
            />
          </div>
          <div className="mb-3 text-start">
            <CustomTextField 
              label="Email" 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
          <div className="mb-4 text-start">
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
