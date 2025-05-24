import { useParams, useNavigate } from 'react-router-dom';
import { palette } from '../styles/constants';
import OlasHead from '../componentes/svgs/OlasHead';

function PlazaInfoScreen() {
  const { plazaId } = useParams();
  const navigate = useNavigate();

  const carritos = [
    {
      id: 1,
      nombre: "El Cafecito de Juan",
      descripcion: "Café de especialidad, medialunas y más",
      horario: "8:00 - 20:00",
      dias: "Lunes a Sábado",
      productos: ["Café", "Medialunas", "Jugos naturales"]
    },
    {
      id: 2,
      nombre: "Dulces Momentos",
      descripcion: "Café, té y pastelería artesanal",
      horario: "9:00 - 19:00",
      dias: "Martes a Domingo",
      productos: ["Café", "Té", "Tortas", "Cookies"]
    }
  ];

  return (
    <div className="min-vh-100 bg-crema">
      <div className="position-relative">
        <div className="bg-white py-3 px-4 d-flex justify-content-between align-items-center">
          <button 
            className="btn p-0"
            onClick={() => navigate(-1)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={palette.marron} strokeWidth="2">
              <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-marron h5 mb-0 fw-bold">Carritos en esta plaza</h1>
          <div style={{ width: 24 }}></div>
        </div>
        <div style={{ marginTop: "-1px" }}>
          <OlasHead color={palette.crema} />
        </div>
      </div>

      {/* Lista de carritos */}
      <div className="container px-4 mt-4">
        {carritos.map(carrito => (
          <div key={carrito.id} className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h3 className="h5 text-marron mb-2">{carrito.nombre}</h3>
              <p className="text-muted mb-3">{carrito.descripcion}</p>
              
              <div className="mb-2">
                <small className="text-marron fw-bold">Horario:</small>
                <br />
                <small className="text-muted">{carrito.horario}</small>
              </div>
              
              <div className="mb-3">
                <small className="text-marron fw-bold">Días:</small>
                <br />
                <small className="text-muted">{carrito.dias}</small>
              </div>
              
              <div>
                <small className="text-marron fw-bold">Productos:</small>
                <div className="mt-2">
                  {carrito.productos.map((producto, index) => (
                    <span 
                      key={index}
                      className="badge me-2 mb-2"
                      style={{ 
                        backgroundColor: 'rgba(94, 56, 39, 0.1)',
                        color: palette.marron,
                        padding: '0.5rem 1rem'
                      }}
                    >
                      {producto}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlazaInfoScreen;
