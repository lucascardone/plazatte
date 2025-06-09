import { palette } from "../styles/constants";

type SuccessModalProps = {
   onClose: () => void;
   show: boolean;
}

function SuccessModal({ onClose, show }: SuccessModalProps) {
   if (!show) return null;

   return (
      <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
         style={{
            zIndex: 1050
         }}>
         <div className="p-4 rounded-3 text-center"
            style={{
               width: '85%',
               height: '55%',
               backgroundColor: 'rgba(251, 242, 231, 0.9)',
            }}>
            <h2 className="fw-bolder mt-5 mx-2" style={{ color: '#5E3827', fontSize: '34px' }}>Solicitud enviada correctamente</h2>
            <div className="mb-3" style={{ marginTop: '2rem' }}>
               <svg width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#A71A36" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>
            <button
               className="btn rounded-pill btn-rojo px-4 py-3 fw-bold"
               style={{
                  marginTop: '2rem',
                  width: '70%',
               }}
               onClick={onClose}>
               Volver al inicio
            </button>
         </div>
      </div>
   );
}

export default SuccessModal;
