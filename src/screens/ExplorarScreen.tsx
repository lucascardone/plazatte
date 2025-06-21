import PlazaMap from "../componentes/PlazaMap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { palette } from "../styles/constants";

interface Plaza {
   id: string;
   nombre: string;
   coordenadas: {
      lat: number;
      lng: number;
   };
   carritos: {
      nombre: string;
      horario: string;
   }[];
}

const plazas: Plaza[] = [
   {
      id: 'italia',
      nombre: 'Plaza Italia',
      coordenadas: {
         lat: -32.891649,
         lng: -68.848619
      },
      carritos: [
         {
            nombre: "Dulce Café",
            horario: "8:00 AM a 8:00 PM"
         }
      ]
   },
   {
      id: 'españa',
      nombre: 'Plaza España',
      coordenadas: {
         lat: -32.893065,
         lng: -68.842307
      },
      carritos: [
         {
            nombre: "Café Aróma",
            horario: "7:00 AM a 7:00 PM"
         }
      ]
   },
   {
      id: 'independencia',
      nombre: 'Plaza Independencia',
      coordenadas: {
         lat: -32.890037,
         lng: -68.845426
      },
      carritos: [
         {
            nombre: "Café Central",
            horario: "9:00 AM a 9:00 PM"
         }
      ]
   },
   {
      id: 'chile',
      nombre: 'Plaza Chile',
      coordenadas: {
         lat: -32.886398,
         lng: -68.847004
      },
      carritos: [
         {
            nombre: "Chilensis Café",
            horario: "8:30 AM a 8:30 PM"
         }
      ]
   },
   {
      id: 'sanmartin',
      nombre: 'Plaza San Martín',
      coordenadas: {
         lat: -32.887297,
         lng: -68.840641
      },
      carritos: [
         {
            nombre: "San Martín Café",
            horario: "7:30 AM a 8:00 PM"
         }
      ]
   }
];

function ExplorarScreen() {
   const navigate = useNavigate();
   const [selectedPlaza, setSelectedPlaza] = useState<Plaza>(plazas[0]);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   return (
      <div className="min-vh-100 position-relative" style={{ backgroundColor: '#fff' }}>
         <div
            style={{
               backgroundColor: palette.verde,
               position: 'fixed',
               top: 0,
               left: 0,
               right: 0,
               zIndex: 1000,
               padding: '2rem'
            }}
         >
            <h1 className="text-white mb-0 text-center fw-bold">{selectedPlaza.nombre}</h1>
         </div>
         <div
            style={{
               position: 'fixed',
               top: 'calc(4rem + 2rem)',
               left: 0,
               right: 0,
               zIndex: 999
            }}
         >
            <div className="position-relative">
               <button
                  className="btn w-100 d-flex align-items-center justify-content-center gap-5"
                  style={{
                     backgroundColor: 'rgba(251, 242, 231, 0.95)',
                     padding: '0.75rem 1rem',
                     border: 'none',
                     borderTop: '1px solid rgba(94, 56, 39, 0.1)',
                     borderBottom: '1px solid rgba(94, 56, 39, 0.1)'
                  }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
               >
                  <span className="fw-bold" style={{ color: '#AC8354' }}>Otras plazas</span>
                  <svg
                     width="40"
                     height="40"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="#AC8354"
                     strokeWidth="2"
                     style={{
                        transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        marginTop: '2px'
                     }}
                  >
                     <path d="M6 9l6 6 6-6" />
                  </svg>
               </button>

               {isDropdownOpen && (
                  <div
                     className="position-absolute w-100 start-0 shadow-sm"
                     style={{
                        backgroundColor: 'rgba(251, 242, 231, 0.95)',
                        zIndex: 998
                     }}
                  >
                     {plazas.filter(plaza => plaza.id !== selectedPlaza.id).map(plaza => (
                        <button
                           key={plaza.id}
                           className="btn w-100 text-start"
                           style={{
                              color: '#5E3827',
                              padding: '0.75rem 1rem',
                              border: 'none',
                              borderBottom: '1px solid rgba(94, 56, 39, 0.1)'
                           }}
                           onClick={() => {
                              setSelectedPlaza(plaza);
                              setIsDropdownOpen(false);
                           }}
                        >
                           {plaza.nombre}
                        </button>
                     ))}
                  </div>
               )}
            </div>
         </div>

         <div style={{
            height: '100vh',
            width: '100%',
         }}>
            <PlazaMap selectedPlaza={selectedPlaza} />
         </div>

         {/* Botón flotante inferior */}
         <button
            className="btn position-fixed bottom-0 start-50 translate-middle-x px-4 py-3 text-white fw-bold"
            style={{
               backgroundColor: palette.verde,
               borderRadius: '50px',
               zIndex: 1000,
               marginBottom: '5.5rem',
            }}
            onClick={() => navigate(`/plaza/${selectedPlaza.id}/info`)}
         >
            + sobre los carritos
         </button>
      </div>
   );
}

export default ExplorarScreen;
