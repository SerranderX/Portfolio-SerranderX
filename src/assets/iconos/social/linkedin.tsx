import React from "react";
import { SvgPropsInterface } from "@interfaces/svgProps.interface";
import styles from "@styles/SocialIcon.module.scss";

export const LinkedinIcon: React.FC<SvgPropsInterface> = ({
    svgClass,
}): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className={`${svgClass && svgClass}`}
        >
            <g
                fill="none"
                strokeMiterlimit="10"
                strokeWidth="1"
                transform="matrix(2.81 0 0 2.81 1.407 1.407)"
            >
                <path
                    fill="#069"
                    d="M45 0C20.147 0 0 20.147 0 45s20.147 45 45 45 45-20.147 45-45S69.853 0 45 0z"
                ></path>
                <rect
                    width="10.37"
                    height="33.34"
                    x="20.82"
                    y="36.62"
                    fill="#FFF"
                    rx="0"
                    ry="0"
                ></rect>
                <path
                    fill="#FFF"
                    d="M26.005 32.062A6.005 6.005 0 0120 26.055a6.007 6.007 0 016.005-6.011 6.01 6.01 0 016.005 6.011 6.01 6.01 0 01-6.005 6.007zM70 69.956H59.643V53.743c0-3.867-.067-8.84-5.385-8.84-5.392 0-6.215 4.215-6.215 8.562v16.491H37.686V36.617h9.939v4.559h.141c1.383-2.622 4.764-5.385 9.804-5.385 10.493 0 12.43 6.903 12.43 15.88v18.285z"
                ></path>
            </g>
        </svg>
    );
};
