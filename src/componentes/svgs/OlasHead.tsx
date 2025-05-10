interface OlasHeadProps {
    color: string;
}
function OlasHead({ color }: OlasHeadProps) {
    return (
        <>
            <svg width="440" height="89" viewBox="0 0 440 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_12_8)">
                    <path d="M-14.5 49.59L-14.5 -57.5L445.1 -57.5L445.1 59.6C423.31 76.68 397.71 89.86 370.87 87.7C336.78 84.95 327.66 59.61 295.21 59.61C262.73 59.61 253.61 84.99 219.55 87.7C187.21 90.27 179.17 64.06 145.32 59.34C109.5 54.34 98.79 85.41 61.06 87.94C41.2 89.27 15.9 83.55 -14.51 59.34L-14.51 49.6L-14.5 49.59Z" fill={color} stroke={color} stroke-miterlimit="10" />
                </g>
                <defs>
                    <clipPath id="clip0_12_8">
                        <rect width="460.6" height="146.61" fill="white" transform="translate(445.6 88.61) rotate(-180)" />
                    </clipPath>
                </defs>
            </svg>
        </>
    );
}

export default OlasHead;