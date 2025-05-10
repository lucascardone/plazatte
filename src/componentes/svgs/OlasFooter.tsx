interface OlasFooterProps {
    color: string;
}
function OlasFooter({ color }: OlasFooterProps) {
    return (
        <svg width="440" height="73" viewBox="0 0 440 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_12_11)">
                <path d="M445.1 39.02V146.11L-14.5 146.11L-14.5 29.01C7.29 11.93 32.89 -1.24998 59.73 0.910017C93.82 3.66002 102.94 29 135.39 29C167.87 29 176.99 3.62002 211.05 0.910017C243.39 -1.65998 251.43 24.55 285.28 29.27C321.1 34.27 331.81 3.20002 369.54 0.670017C389.4 -0.659983 414.7 5.06002 445.11 29.27V39.01L445.1 39.02Z" fill={color} stroke={color} stroke-miterlimit="10" />
            </g>
            <defs>
                <clipPath id="clip0_12_11">
                    <rect width="460.6" height="146.61" fill="white" transform="translate(-15)" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default OlasFooter; 