import PlazaMap from "../componentes/PlazaMap";
import { useState } from "react";
import { palette } from "../styles/constants";

function ExplorarScreen() {
  const [showCarritos, setShowCarritos] = useState(false);

  return (
    <div className="min-vh-100 position-relative" style={{ backgroundColor: '#fff' }}>
      {/* Header fijo */}
      <div 
        style={{ 
          backgroundColor: palette.verde,
          padding: '1rem',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000
        }}
      >
        <h1 className="text-white h5 mb-0 text-center">Plaza Italia</h1>
        <button 
          className="btn text-white border-0 d-flex align-items-center position-relative w-100 mt-2"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <span className="flex-grow-1 text-start ps-2">Otras plazas</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* Mapa */}
      <div style={{ 
        height: '100vh',
        width: '100%',
        marginTop: '88px' // Altura del header
      }}>
        <PlazaMap />
      </div>

      {/* Botón flotante inferior */}
      <button
        className="btn position-fixed bottom-0 start-50 translate-middle-x mb-4 px-4 py-2 text-white"
        style={{ 
          backgroundColor: palette.verde,
          borderRadius: '50px',
          zIndex: 1000
        }}
        onClick={() => setShowCarritos(true)}
      >
        + sobre los carritos
      </button>

      {/* Panel de carritos */}
      {showCarritos && (
        <div 
          className="position-fixed bottom-0 start-0 w-100 bg-white p-4 rounded-top shadow"
          style={{ 
            zIndex: 1001,
            maxHeight: '70vh',
            overflowY: 'auto'
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h6 mb-0">Carritos en esta plaza</h2>
            <button 
              className="btn btn-link p-0 text-dark"
              onClick={() => setShowCarritos(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-body">
              <h3 className="h6 text-marron mb-2">El Cafecito de Juan</h3>
              <p className="small text-muted mb-0">
                Café de especialidad, medialunas y más
              </p>
            </div>
          </div>
          <div className="card border-0 shadow-sm mb-3">
            <div className="card-body">
              <h3 className="h6 text-marron mb-2">Dulces Momentos</h3>
              <p className="small text-muted mb-0">
                Café, té y pastelería artesanal
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExplorarScreen;
