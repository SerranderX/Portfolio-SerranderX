import * as React from "react"
import { SVGProps } from "react"
import styles from '@styles/ArrowButton.module.scss'

export const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 312 511.42"
    className={`${styles.ButtonFilter} ${props.className}`}
    {...props}
  >
    <path
      fillRule="nonzero"
      d="M306.3 32.62 65.46 252.86 312 478.8l-29.84 32.62L0 252.83 276.46 0z"
    />
  </svg>
)
