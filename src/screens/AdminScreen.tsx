import LoginSvg from "../componentes/svgs/LoginSvg";
import { palette } from "../styles/constants";

interface Carrito {
   nombre: string;
   ubicacion: string;
   imagen: string;
}

function AdminScreen() {
   const carritosRegistrados: Carrito[] = [
      {
         nombre: "José Felipe Gonzales",
         ubicacion: "Plaza Italia",
         imagen: "https://randomuser.me/api/portraits/men/1.jpg"
      },
      {
         nombre: "María Paz Perez",
         ubicacion: "Plaza España",
         imagen: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
         nombre: "Candela Brown",
         ubicacion: "Plaza Independencia",
         imagen: "https://randomuser.me/api/portraits/women/2.jpg"
      }
   ];

   const solicitudesCarritos: Carrito[] = [
      {
         nombre: "Gonzalo Martínez",
         ubicacion: "Plaza San Martín",
         imagen: "https://randomuser.me/api/portraits/men/2.jpg"
      },
      {
         nombre: "Guadalupe Hernández",
         ubicacion: "Plaza Chile",
         imagen: "https://randomuser.me/api/portraits/women/3.jpg"
      },
      {
         nombre: "Martín Gutiérrez",
         ubicacion: "Plaza Italia",
         imagen: "https://randomuser.me/api/portraits/men/3.jpg"
      }
   ];

   const ListaCarritos = ({ carritos, titulo }: { carritos: Carrito[], titulo: string }) => (
      <div className="mb-4">
         <div style={{
            backgroundColor: palette.rojo,
            width: '100%',
            padding: '1rem',
            color: 'white',
            fontSize: '1.1rem',
            fontWeight: 'bold'
         }}>
            {titulo}
         </div>
         <div style={{ backgroundColor: palette.crema }}>
            <div className="d-flex justify-content-between px-3 py-2" style={{ backgroundColor: 'rgba(168, 27, 54, 0.16)' }}>
               <span className="fw-medium">Nombre</span>
               <span className="fw-medium">Ubicación</span>
            </div>
            {carritos.map((carrito, index) => (
               <div key={index} className="d-flex align-items-center justify-content-between px-3 py-2">
                  <div className="d-flex align-items-center">
                     <img
                        src={carrito.imagen}
                        alt={carrito.nombre}
                        style={{
                           width: '40px',
                           height: '40px',
                           borderRadius: '50%',
                           marginRight: '1rem'
                        }}
                     />
                     <span>{carrito.nombre}</span>
                  </div>
                  <span>{carrito.ubicacion}</span>
               </div>
            ))}
         </div>
      </div>
   );

   return (
      <div className="min-vh-100 pt-4" style={{ backgroundColor: palette.crema }}>
         <div className="container">
            <div className="d-flex align-items-center mb-4">

               <LoginSvg width={30} height={30} strokeWidth={6} />
               <span className="fw-medium" style={{ marginLeft: '10px' }}>administrador</span>
            </div>
         </div>
         <ListaCarritos titulo="Carritos registrados" carritos={carritosRegistrados} />
         <ListaCarritos titulo="Solicitudes nuevos carritos" carritos={solicitudesCarritos} />
      </div>
   );
}

export default AdminScreen;
