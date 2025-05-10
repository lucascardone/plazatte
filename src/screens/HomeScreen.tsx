import { useNavigate } from "react-router-dom";
import OlasHead from "../componentes/svgs/OlasHead";
import Logo from "../componentes/svgs/Logo";
import OlasFooter from "../componentes/svgs/OlasFooter";

import { palette } from "../styles/constants";
function HomeScreen() {
    const navigate = useNavigate();

    return (
        <div className="home-layout bg-crema text-center">
            <div className="header">
                <OlasHead color={palette.verde} />
            </div>
            <div className="main d-flex flex-column justify-content-center align-items-center px-4">
                <div className="mb-4">
                    <Logo />
                </div>
                <p className="mb-3">
                    Encuentra carritos de café<br />
                    locales y explora lo que ofrecen
                </p>
                <button
                    className="btn btn-rojo mb-3 w-100"
                    onClick={() => navigate("/explorar")}
                >
                    Explora carritos cercanos a ti
                </button>
                <p className="small">
                    ¿Tenés un carrito?{" "}
                    <a
                        href="#"
                        className="text-rojo"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/registrar");
                        }}
                    >
                        Registralo
                    </a>
                </p>
            </div>
            <div className="footer">
                <OlasFooter color={palette.verde} />
            </div>
        </div>
    );
}


export default HomeScreen;