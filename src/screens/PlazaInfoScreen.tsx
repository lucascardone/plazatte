import { useParams } from 'react-router-dom';
import { palette } from '../styles/constants';
import OndaVector from '../componentes/svgs/OndaVector';
import Logo from '../componentes/svgs/Logo';

function PlazaInfoScreen() {
   const { plazaId } = useParams();

   // TODO usemos json-server para esto
   const plazasInfo = {
      'españa': {
         carritos: [
            {
               id: 1,
               nombre: "Café Aróma",
               horario: "7:00 AM a 7:00 PM",
               menu: [
                  { item: "Café Expresso", precio: 1000 },
                  { item: "Latte", precio: 900 },
                  { item: "Croissant", precio: 800 }
               ],
               opiniones: [
                  { nombre: "Ana", comentario: "Muy lindo", estrellas: 5 },
                  { nombre: "Luis", comentario: "Buen servicio", estrellas: 4 }
               ],
               imagen: "/plaza_españa.jpg"
            }
         ]
      },
      'italia': {
         carritos: [
            {
               id: 1,
               nombre: "Dulce Café",
               horario: "8:00 AM a 8:00 PM",
               menu: [
                  { item: "Café Americano", precio: 900 },
                  { item: "Cappuccino", precio: 1100 },
                  { item: "Medialuna", precio: 700 }
               ],
               opiniones: [
                  { nombre: "María", comentario: "Excelente café", estrellas: 5 },
                  { nombre: "Juan", comentario: "Muy rico todo", estrellas: 5 }
               ],
               imagen: "/plaza_italia.jpg"
            }
         ]
      }
   };

   // Mejorar esta cochinada
   const plazaData = plazaId ? plazasInfo[plazaId as keyof typeof plazasInfo] : null;

   {/* TODO alguna vista que me muestre de manera mas bonita el error */ }
   if (!plazaData) {
      return <div>Plaza no encontrada</div>;
   }

   const carritos = plazaData.carritos;
   return (
      <div style={{ backgroundColor: '#F5E6D3', minHeight: '100vh', height: '100vh', overflowY: 'auto', position: 'relative' }}>
         <div style={{
            position: 'absolute',
            top: 0,
            right: '-50%',
            width: '105%',
            height: '150%',
            zIndex: 0,
            pointerEvents: 'none',
            transition: 'transform 0.1s ease-out'
         }}>
            <OndaVector />
         </div>
         <div style={{ position: 'relative', zIndex: 1 }}>
            {carritos.map(carrito => (
               <div key={carrito.id}>
                  <div className="position-relative mb-4">
                     <div className="mb-5">
                        <div className="position-relative">
                           {/* TODO Imagen estatica para que el contenido cuando scrolleemos haga un efecto mas copado */}
                           <img
                              src={carrito.imagen}
                              alt={carrito.nombre}
                              className="w-100"
                              style={{ height: '300px', objectFit: 'cover' }}
                           />
                           <div
                              className="position-absolute"
                              style={{
                                 bottom: '2rem',
                                 left: '50%',
                                 transform: 'translateX(-50%)',
                                 backgroundColor: 'rgba(251, 242, 231, 0.9)',
                                 padding: '1.5rem 2rem',
                                 textAlign: 'center',
                                 minWidth: '280px'
                              }}
                           >
                              <h2 className="text-marron mb-2 fw-bolder">{carrito.nombre}</h2>
                              <p className="text-marron mb-0">Abierto de:</p>
                              <p className="text-marron mb-0">{carrito.horario}</p>
                           </div>
                        </div>
                     </div>
                     <div className="px-4 position-relative">
                        <div className="position-relative mb-5" style={{ zIndex: 1, marginRight: '3rem' }}>
                           <h2 className="h3 mb-4 fw-bold" style={{ color: '#5E3827' }}>Menú</h2>
                           {carrito.menu.map((item, index) => (
                              <div key={index} className="d-flex align-items-centeraw mb-3" style={{ fontWeight: 500 }}>
                                 <span style={{ color: palette.marron, whiteSpace: 'nowrap' }}>{item.item}</span>
                                 <span style={{ flex: 1, borderBottom: '1.5px dotted #AC8354', margin: '0 10px' }}></span>
                                 <span style={{ color: palette.marron, whiteSpace: 'nowrap' }}>${item.precio}</span>
                              </div>
                           ))}
                        </div>
                        <div className="position-relative mb-5">
                           <h2 className="h3 mb-4 fw-bold" style={{ color: palette.marron }}>Opiniones</h2>
                           {carrito.opiniones.map((opinion, index) => (
                              <div key={index} className="mb-4">
                                 <div className="d-flex justify-content-between align-items-start mb-1">
                                    <div>
                                       <p className="mb-0 fs-3" style={{ color: palette.marron }}>{opinion.nombre}</p>
                                       <p className="small mb-0" style={{ color: palette.marron }}>{opinion.comentario}</p>
                                    </div>
                                    <div>
                                       {[...Array(opinion.estrellas)].map((_, i) => (
                                          <span key={i} style={{ color: palette.marron, fontSize: '2rem' }}>★</span>
                                       ))}
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                        {/* Footer tipo select redes sociales */}
                        <div className="position-relative text-center py-5">
                           <div style={{ transform: 'scale(0.6)', marginBottom: '2.5rem' }}>
                              <Logo />
                           </div>
                           <div style={{ maxWidth: 320, margin: '0 auto' }}>
                              {[
                                 { name: 'Instagram', link: '#' },
                                 { name: 'Facebook', link: '#' },
                                 { name: 'WhatsApp', link: '#' }
                              ].map((red) => (
                                 <div key={red.name} className="d-flex align-items-center justify-content-between mb-3 px-2" style={{ fontSize: '1.35rem', color: palette.marron, fontWeight: 500, background: 'transparent', borderRadius: 10, cursor: 'pointer' }}>
                                    <span>{red.name}</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M7 10L12 15L17 10" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </div>
                              ))}
                           </div>
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
