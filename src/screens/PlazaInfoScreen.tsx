import { useParams } from 'react-router-dom';
import { palette } from '../styles/constants';
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
                  { item: "Croissant", precio: 800 },
                  { item: "Café con Leche", precio: 950 },
                  { item: "Submarino", precio: 1200 }
               ],
               opiniones: [
                  { nombre: "Ana", comentario: "Genial! Muy rico el café", estrellas: 5 },
                  { nombre: "Luis", comentario: "Buen servicio", estrellas: 4 },
                  { nombre: "Sofia", comentario: "Estaba frio", estrellas: 2 },
                  { nombre: "Andres", comentario: "Muy amables", estrellas: 4 },
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
                  { item: "Brownie", precio: 700 },
                  { item: "Té Chai", precio: 950 },
                  { item: "Café con Leche", precio: 1000 }
               ],
               opiniones: [
                  { nombre: "María", comentario: "Excelente café", estrellas: 5 },
                  { nombre: "Juan", comentario: "Muy rico todo", estrellas: 4 },
                  { nombre: "Bruno", comentario: "Estaba bueno", estrellas: 3 },
                  { nombre: "Lucas", comentario: "Muy bueno el Cappuccino", estrellas: 4 },
               ],
               imagen: "/plaza_italia.jpg"
            }
         ]
      },
      'independencia': {
         carritos: [
            {
               id: 1,
               nombre: "Café Central",
               horario: "9:00 AM a 9:00 PM",
               menu: [
                  { item: "Flat White", precio: 1100 },
                  { item: "Medialuna", precio: 700 },
                  { item: "Café Doble", precio: 1200 },
                  { item: "Tostado", precio: 950 },
                  { item: "Limonada", precio: 800 }
               ],
               opiniones: [
                  { nombre: "Pedro", comentario: "El mejor café de la plaza", estrellas: 5 },
                  { nombre: "Lucía", comentario: "Muy buena atención", estrellas: 4 },
                  { nombre: "Carlos", comentario: "Rápido y rico", estrellas: 5 },
                  { nombre: "Valen", comentario: "Me encantó el Flat White", estrellas: 5 },
               ],
               imagen: "/plaza_independencia.jpg"
            }
         ]
      },
      'chile': {
         carritos: [
            {
               id: 1,
               nombre: "Café al paso",
               horario: "8:30 AM a 8:30 PM",
               menu: [
                  { item: "Café Cortado", precio: 950 },
                  { item: "Torta de Chocolate", precio: 1200 },
                  { item: "Té Verde", precio: 800 },
                  { item: "Sandwich Veggie", precio: 1100 },
                  { item: "Café Helado", precio: 1000 }
               ],
               opiniones: [
                  { nombre: "Santi", comentario: "Muy buena onda!", estrellas: 5 },
                  { nombre: "Flor", comentario: "El café helado es lo más", estrellas: 5 },
                  { nombre: "Martina", comentario: "Riquísima la torta", estrellas: 4 },
                  { nombre: "Julián", comentario: "Volvería sin dudas", estrellas: 5 },
               ],
               imagen: "/plaza_chile.jpg"
            }
         ]
      },
      'sanmartin': {
         carritos: [
            {
               id: 1,
               nombre: "San Martín Café",
               horario: "7:30 AM a 8:00 PM",
               menu: [
                  { item: "Café Latte", precio: 950 },
                  { item: "Budín de Limón", precio: 850 },
                  { item: "Espresso", precio: 900 },
                  { item: "Tostado de Jamón y Queso", precio: 1100 },
                  { item: "Jugo de Naranja", precio: 700 }
               ],
               opiniones: [
                  { nombre: "Agustina", comentario: "El budín es increíble!", estrellas: 5 },
                  { nombre: "Ramiro", comentario: "Muy buen café y atención", estrellas: 4 },
                  { nombre: "Sole", comentario: "El lugar perfecto para la tarde", estrellas: 5 },
                  { nombre: "Nico", comentario: "Me encantó el espresso", estrellas: 5 },
               ],
               imagen: "/plaza_sanmartin.jpg"
            }
         ]
      }
   };

   // Mejorar esta cochinada
   const plazaData = plazaId ? plazasInfo[plazaId as keyof typeof plazasInfo] : null;

   if (!plazaData) {
      return <div>Plaza no encontrada</div>;
   }

   const carritos = plazaData.carritos;
   return (
      <div style={{ backgroundColor: '#F5E6D3', minHeight: '100vh', height: '100vh', overflowY: 'auto', position: 'relative', overflowX: 'hidden' }}>
         <div style={{ position: 'relative', zIndex: 1 }}>
            {carritos.map(carrito => (
               <div key={carrito.id}>
                  <div className="position-relative mb-4">
                     <div className="mb-5">
                        <div className="position-relative">
                           <div style={{ height: '300px', position: 'relative', overflow: 'hidden' }}>
                              <img
                                 src={carrito.imagen}
                                 alt={carrito.nombre}
                                 style={{
                                    position: 'fixed',
                                    width: '100%',
                                    height: '300px',
                                    objectFit: 'cover',
                                    left: 0,
                                    zIndex: 0
                                 }}
                              />
                           </div>
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
                     <div className="px-4 position-relative" style={{ backgroundColor: '#F5E6D3', position: 'relative', zIndex: 2, marginTop: '-2rem' }}>
                        <div className="position-relative mb-5" style={{ marginRight: '3rem', paddingTop: '2rem' }}>
                           <h2 className="h3 mb-4 fw-bolder" style={{ color: '#5E3827' }}>Menú</h2>
                           {carrito.menu.map((item, index) => (
                              <div key={index} className="d-flex align-items-centeraw mb-3" style={{ fontWeight: 500 }}>
                                 <span style={{ color: palette.marron, whiteSpace: 'nowrap' }}>{item.item}</span>
                                 <span style={{ flex: 1, borderBottom: '1.5px dotted #AC8354', margin: '0 10px' }}></span>
                                 <span style={{ color: palette.marron, whiteSpace: 'nowrap' }}>${item.precio}</span>
                              </div>
                           ))}
                        </div>
                        <div className="position-relative mb-5" style={{ paddingTop: '2rem' }}>
                           <h2 className="h3 mb-4 fw-bolder" style={{ color: palette.marron }}>Opiniones</h2>
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
                           <div style={{ transform: 'scale(0.8)', marginBottom: '.5rem' }}>
                              <Logo />
                           </div>
                           <div className="d-flex justify-content-center gap-4">
                              <a href="https://www.instagram.com/plazatte?igsh=Z2t3enkxMGN5Y2Ry" className="text-decoration-none">
                                 <svg width="35" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.9408 0.253475C22.8845 0.253475 25.8283 0.0413477 28.7769 0.0268844C35.3396 -0.00686314 40.785 5.61934 40.6344 11.8048C40.4935 17.4165 40.6296 23.0379 40.5907 28.6545C40.5567 33.6732 37.3846 38.0942 32.7359 39.5116C31.4437 39.9069 30.0398 40.0949 28.6846 40.1094C23.2537 40.1769 17.818 39.9503 12.3968 40.1913C6.57247 40.4469 -0.106823 35.8041 4.52801e-05 28.2302C0.0826256 22.2714 0.0340489 16.3125 0.208925 10.3585C0.359513 5.32044 5.2026 0.513814 10.308 0.282402C13.5141 0.137769 16.7298 0.253475 19.9408 0.253475C19.9408 0.330613 19.9408 0.176338 19.9408 0.253475ZM2.44831 20.2995C2.44831 23.1826 2.45802 26.0704 2.44831 28.9534C2.42888 33.4804 6.23729 37.6458 11.4398 37.8097C17.3613 37.9977 23.3023 37.9736 29.2238 37.8049C34.4312 37.6554 38.2104 33.7407 38.2882 28.6352C38.3707 22.9029 38.3659 17.1707 38.2979 11.4384C38.2493 7.10906 34.9121 3.3004 30.6422 2.60134C29.4424 2.40368 28.2036 2.36993 26.9844 2.37475C21.9713 2.40368 16.963 2.48082 11.9499 2.53385C6.27615 2.59652 2.56003 6.22198 2.45802 11.8723C2.40945 14.683 2.44831 17.4937 2.44831 20.2995Z" fill="#5E3827" />
                                    <path d="M20.548 31.2675C14.5147 31.282 9.39962 26.2825 9.37534 20.3574C9.35105 14.2153 14.1116 9.38944 20.2079 9.37979C26.4209 9.36533 31.5166 14.2153 31.5797 20.2079C31.6429 26.1138 26.518 31.2579 20.548 31.2723V31.2675ZM29.1363 20.2417C29.1752 15.6617 25.2356 11.7662 20.5091 11.7084C15.6757 11.6457 11.7507 15.4206 11.7119 20.1742C11.673 24.8314 15.7486 28.9389 20.4362 28.9679C25.1725 28.9968 29.0975 25.0628 29.1363 20.2417Z" fill="#5E3827" />
                                    <path d="M31.2347 11.7084C32.3937 11.7084 33.3333 10.7759 33.3333 9.62568C33.3333 8.47543 32.3937 7.54297 31.2347 7.54297C30.0758 7.54297 29.1362 8.47543 29.1362 9.62568C29.1362 10.7759 30.0758 11.7084 31.2347 11.7084Z" fill="#5E3827" />
                                 </svg>

                              </a>
                              <a href="#" className="text-decoration-none">
                                 <svg width="35" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.5145 20.186C40.3542 30.4212 32.8054 38.7183 22.6431 39.6439C18.6938 40.0055 14.866 39.427 11.3442 37.513C10.5573 37.0888 9.92091 37.0888 9.10968 37.4118C6.92373 38.2892 4.69891 39.075 2.48868 39.8898C2.13407 40.02 1.76003 40.1357 1.38599 40.1791C0.288158 40.3092 -0.212183 39.7596 0.0792773 38.7038C0.841931 35.9317 1.6483 33.1692 2.39638 30.3923C2.50325 29.9921 2.55669 29.457 2.3721 29.1243C-2.82075 19.7039 1.25483 6.74485 12.0729 1.81289C24.0519 -3.64458 38.1342 3.75578 40.155 16.6811C40.3348 17.8382 40.3979 19.0145 40.5145 20.186ZM3.00845 37.1032C5.39356 36.2354 7.53093 35.4785 9.65373 34.6782C10.3532 34.4131 10.907 34.4516 11.5774 34.8614C14.0596 36.3945 16.7848 37.1418 19.714 37.2334C31.2412 37.5805 39.6741 28.3722 37.7796 17.2596C36.0163 6.91841 26.3447 1.41756 17.528 2.70961C5.60244 4.45484 -1.0817 17.7996 4.85436 28.2083C5.16525 28.7579 5.25755 29.6016 5.09725 30.2187C4.51433 32.4412 3.77596 34.6204 3.0133 37.1032H3.00845Z" fill="#5E3827" />
                                    <path d="M16.7799 19.1301C18.2226 21.1067 19.9617 22.7218 22.1816 23.7583C22.4488 23.8837 23.0317 23.7583 23.2455 23.5317C24.8533 21.8251 26.5535 21.8492 28.4286 23.0593C29.0309 23.445 29.7499 23.6426 30.3959 23.9656C31.6589 24.5972 32.1058 25.6434 31.7269 26.9885C30.9109 29.8763 27.8117 31.6505 24.5376 30.9514C17.8923 29.5388 13.1512 25.6096 10.1881 19.6411C8.89105 17.0329 8.67246 14.2512 10.5087 11.6381C12.2768 9.12153 15.2692 9.30473 16.6099 12.0431C17.0082 12.8579 17.3142 13.7257 17.7806 14.5019C18.5821 15.8277 18.4509 17.004 17.4454 18.1466C17.1977 18.4262 17.0276 18.7685 16.7896 19.1253L16.7799 19.1301ZM29.3564 26.2508C29.0018 26.0773 28.6035 25.9471 28.278 25.7205C26.7867 24.6888 25.4508 24.6454 24.1004 26.0387C23.3572 26.8053 22.3565 26.892 21.3655 26.3376C18.6258 24.819 16.231 22.9243 14.5259 20.2582C14.045 19.5061 13.9139 18.6673 14.5114 18.0405C15.8618 16.628 15.6384 15.2684 14.6717 13.8221C14.5697 13.6678 14.5308 13.4701 14.4531 13.3014C13.9333 12.1926 13.2872 12.0817 12.5003 13.0218C12.2186 13.3593 12.0291 13.798 11.8931 14.2222C11.383 15.7698 11.8057 17.2113 12.51 18.595C14.0402 21.6033 16.2456 24.0428 19.0484 25.923C21.2101 27.3742 23.5078 28.5746 26.2281 28.565C27.7291 28.5601 28.8123 27.7695 29.3661 26.2557L29.3564 26.2508Z" fill="#5E3827" />
                                 </svg>

                              </a>
                              <a href="#" className="text-decoration-none">
                                 <svg width="20" height="45" viewBox="0 0 26 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.16186 27.2343C5.24309 27.2343 3.48462 27.1957 1.731 27.2487C0.793469 27.2777 0.404855 26.9402 0.409713 26.0097C0.434001 23.2376 0.429144 20.4655 0.409713 17.6934C0.409713 16.8063 0.832332 16.4977 1.68728 16.5122C3.44576 16.5459 5.20423 16.5218 7.14729 16.5218C7.14729 16.0542 7.123 15.6155 7.14729 15.1816C7.28816 13.0314 7.20072 10.8281 7.64277 8.7406C8.59973 4.2136 12.6559 0.983475 17.3144 0.809916C19.7966 0.718315 22.2886 0.78581 24.7709 0.756884C25.655 0.747242 25.995 1.14739 25.9853 2.00072C25.961 4.50769 25.961 7.01465 25.9853 9.51679C25.995 10.428 25.6258 10.8378 24.6932 10.8185C23.2796 10.7896 21.8612 10.7944 20.4476 10.8185C18.9563 10.8426 18.1888 11.6043 18.1693 13.0506C18.1548 14.1499 18.1693 15.2491 18.1693 16.517C20.1318 16.517 22.0652 16.517 23.9985 16.517C25.6987 16.517 25.927 16.8159 25.6793 18.4503C25.3052 20.9235 24.9506 23.4015 24.6495 25.8844C24.528 26.8727 24.086 27.268 23.0804 27.2343C21.4823 27.1812 19.8792 27.2198 18.1305 27.2198C18.1305 27.6923 18.1305 28.0876 18.1305 28.4878C18.1451 33.4631 18.1596 38.4337 18.1693 43.409C18.1693 44.8409 18.0236 44.9807 16.6052 44.9807C13.9675 44.9807 11.3249 44.9807 8.68718 44.9807C7.23959 44.9807 7.15215 44.8891 7.15215 43.3994C7.15215 38.4626 7.15215 33.5306 7.15215 28.5938V27.2246L7.16186 27.2343ZM2.83855 24.9202C4.57273 24.9202 6.24863 24.9202 7.92452 24.9202C9.44011 24.9202 9.48383 24.9635 9.48383 26.4436C9.47897 31.419 9.47411 36.3943 9.46926 41.3697C9.46926 41.7747 9.46926 42.1796 9.46926 42.6376H15.6871C15.7016 42.305 15.7308 42.0109 15.7308 41.7168C15.7308 36.6643 15.7162 31.6166 15.7114 26.5641C15.7114 24.9684 15.7648 24.9202 17.4164 24.9202C19.0146 24.9202 20.6176 24.9202 22.2789 24.9202C22.5752 22.8808 22.8618 20.9283 23.163 18.8938C20.9819 18.8938 18.9611 18.8842 16.9355 18.8938C16.27 18.8938 15.7551 18.6865 15.7599 17.9633C15.7697 15.8758 15.7065 13.7835 15.9057 11.7104C16.0805 9.87356 17.4213 8.71167 19.2623 8.53811C20.6613 8.40794 22.07 8.3983 23.4933 8.33081V3.10475C21.4968 3.10475 19.5829 3.01315 17.6836 3.12404C13.1757 3.37955 10.1493 6.14686 9.69757 10.5437C9.45468 12.9157 9.50812 15.3166 9.48383 17.703C9.47411 18.5853 9.16322 18.9275 8.26941 18.9083C6.48179 18.8649 4.68932 18.8938 2.83855 18.8938V24.9153V24.9202Z" fill="#5E3827" />
                                 </svg>

                              </a>
                           </div>
                           <div style={{ marginLeft: '-25rem', width: '100%' }}>
                              <svg width="840" height="300" viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M500.069 400.041C521.643 365.122 490.766 317.811 450.104 335.823C424.457 345.278 415.95 374.898 390.204 383.857C382.836 386.555 375.244 387.485 367.872 386.9C330.385 383.919 308.179 343.855 324.316 309.907C337.067 283.086 365.699 262.13 377.523 235.152C396.618 185.546 355.991 134.744 306.889 125.971C305.976 125.807 305.071 125.618 304.169 125.396C250.573 112.358 216.608 157.881 177.849 151.191C158.626 147.873 146.237 134.295 137.162 123.685C113.244 95.7212 123.151 50.1025 89.9977 19.6239C86.6835 16.5748 68.3368 1.14259 46.6437 4.9996C28.3628 8.2484 17.9634 21.0225 12.5905 36.196C6.33414 53.8719 10.1343 64.5906 3.87261 81.0685C0.419868 90.1577 -4.63081 98.1286 -18.5429 103.476C-39.7147 111.616 -53.3641 97.7512 -85.6523 120.866C-117.94 143.98 -110.092 200.014 -109.615 203.708" stroke="#AB8254" stroke-opacity="0.4" stroke-width="8" stroke-miterlimit="10" />
                              </svg>
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
