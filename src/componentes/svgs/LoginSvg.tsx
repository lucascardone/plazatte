interface LoginSvgProps {
   width?: number;
   height?: number;
   strokeWidth?: number;
}

function LoginSvg({ width = 105, height = 104, strokeWidth = 5 }: LoginSvgProps) {
   return (
      <svg width={width} height={height} viewBox="0 0 105 104" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="52.583" cy="52" r="49.5" stroke="#5E3827" strokeWidth={strokeWidth} />
         <path d="M75.9164 78.25V72.4167C75.9164 69.3225 74.6873 66.355 72.4993 64.1671C70.3114 61.9792 67.3439 60.75 64.2498 60.75H40.9164C37.8222 60.75 34.8548 61.9792 32.6668 64.1671C30.4789 66.355 29.2498 69.3225 29.2498 72.4167V78.25M64.2498 37.4167C64.2498 43.86 59.0264 49.0833 52.5831 49.0833C46.1398 49.0833 40.9164 43.86 40.9164 37.4167C40.9164 30.9733 46.1398 25.75 52.5831 25.75C59.0264 25.75 64.2498 30.9733 64.2498 37.4167Z" stroke="#5E3827" strokeWidth={strokeWidth - 1} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
   );
}

export default LoginSvg;
