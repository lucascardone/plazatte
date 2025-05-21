import LoginSvg from "../componentes/svgs/LoginSvg";
import '../styles/paleta.css';
import CustomTextField from "../componentes/CustomTextField";
import OlasFooter from "../componentes/svgs/OlasFooter";
import { palette } from "../styles/constants";

function LoginCarritoScreen() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-crema">
      <div className="flex-grow-1 d-flex flex-column align-items-center text-center px-4 w-100">
        <hr className="mb-2"/>
        <h1 className="text-marron fw-bold text-center mt-5 mb-5">Registra tu carrito</h1>
        <hr className="mb-2"/>
        <LoginSvg />
        <hr className="mb-3"/>
        <form className="mt-4" style={{ width: '75%' }}>
          <div className="mb-3 text-start">
            <CustomTextField label="Nombre" />
          </div>
          <div className="mb-3 text-start">
            <CustomTextField label="Email" />
          </div>
          <div className="mb-4 text-start">
            <CustomTextField label="Teléfono" />
          </div>
          <button type="submit" className="btn btn-dorado rounded-pill px-4 py-3 text-white w-50 mt-5">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginCarritoScreen;
