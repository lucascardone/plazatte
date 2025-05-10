import LoginSvg from "../componentes/svgs/LoginSvg";
import '../styles/paleta.css';
import CustomTextField from "../componentes/CustomTextField";
import OlasFooter from "../componentes/svgs/OlasFooter";
import { palette } from "../styles/constants";

function LoginCarritoScreen() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-crema">
      <div className="flex-grow-1 d-flex flex-column align-items-center text-center px-4 w-100">
        <h1 className="text-rojo fw-bold text-center my-4">Registra tu carrito</h1>

        <LoginSvg />

        <form className="w-100 mt-4" style={{ maxWidth: '400px' }}>
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
      <div className="bottom">
        <OlasFooter color={palette.rojo} />
      </div>
    </div>
  );
}

export default LoginCarritoScreen;
