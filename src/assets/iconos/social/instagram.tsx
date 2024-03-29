import React from "react";
import { SvgPropsInterface } from '@interfaces/svgProps.interface';

export const InstagramIcon: React.FC<SvgPropsInterface> = ({ svgClass }): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            data-name="Layer 1"
            viewBox="0 0 128 128"
            className={`${svgClass && svgClass}`}
        >
            <defs>
                <clipPath id="b">
                    <circle cx={64} cy={64} r={64} fill="none" />
                </clipPath>
                <clipPath id="c">
                    <path
                        fill="none"
                        d="M104-163H24a24.07 24.07 0 0 0-24 24v80a24.07 24.07 0 0 0 24 24h80a24.07 24.07 0 0 0 24-24v-80a24.07 24.07 0 0 0-24-24Zm16 104a16 16 0 0 1-16 16H24A16 16 0 0 1 8-59v-80a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16Z"
                    />
                </clipPath>
                <clipPath id="e">
                    <circle cx={82} cy={209} r={5} fill="none" />
                </clipPath>
                <clipPath id="g">
                    <path
                        fill="none"
                        d="M64-115a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16Zm0 24a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8Z"
                    />
                </clipPath>
                <clipPath id="h">
                    <path
                        fill="none"
                        d="M84-63H44a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v40a16 16 0 0 1-16 16Zm-40-64a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8Z"
                    />
                </clipPath>
                <clipPath id="i">
                    <circle cx={82} cy={-117} r={5} fill="none" />
                </clipPath>
                <radialGradient
                    id="a"
                    cx={27.5}
                    cy={121.5}
                    r={137.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#ffd676" />
                    <stop offset={0.25} stopColor="#f2a454" />
                    <stop offset={0.38} stopColor="#f05c3c" />
                    <stop offset={0.7} stopColor="#c22f86" />
                    <stop offset={0.96} stopColor="#6666ad" />
                    <stop offset={0.99} stopColor="#5c6cb2" />
                </radialGradient>
                <radialGradient
                    id="d"
                    cx={27.5}
                    cy={-41.5}
                    r={148.5}
                    xlinkHref="#a"
                />
                <radialGradient
                    id="f"
                    cx={13.87}
                    cy={303.38}
                    r={185.63}
                    xlinkHref="#a"
                />
                <radialGradient
                    id="j"
                    cx={13.87}
                    cy={-22.62}
                    r={185.63}
                    xlinkHref="#a"
                />
            </defs>
            <g clipPath="url(#b)">
                <circle cx={27.5} cy={121.5} r={137.5} fill="url(#a)" />
            </g>
            <g clipPath="url(#c)">
                <circle cx={27.5} cy={-41.5} r={148.5} fill="url(#d)" />
            </g>
            <g clipPath="url(#e)">
                <circle cx={13.87} cy={303.38} r={185.63} fill="url(#f)" />
            </g>
            <g clipPath="url(#g)">
                <circle cx={27.5} cy={-41.5} r={148.5} fill="url(#d)" />
            </g>
            <g clipPath="url(#h)">
                <circle cx={27.5} cy={-41.5} r={148.5} fill="url(#d)" />
            </g>
            <g clipPath="url(#i)">
                <circle cx={13.87} cy={-22.62} r={185.63} fill="url(#j)" />
            </g>
            <circle cx={82} cy={46} r={5} fill="#fff" />
            <path
                fill="#fff"
                d="M64 48a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm0 24a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"
            />
            <rect
                width={64}
                height={64}
                x={32}
                y={32}
                fill="none"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeWidth={8}
                rx={12}
                ry={12}
            />
        </svg>
    );
};
