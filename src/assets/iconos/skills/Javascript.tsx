import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 122.88"
    style={{
      enableBackground: "new 0 0 122.88 122.88",
    }}
    xmlSpace="preserve"
  >
    <path
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#f7df1e",
      }}
      d="M0 0h122.88v122.88H0V0z"
    />
    <path
      d="m32.31 102.69 9.4-5.69c1.81 3.22 3.46 5.94 7.42 5.94 3.79 0 6.19-1.48 6.19-7.26V56.41h11.55v39.43c0 11.96-7.01 17.4-17.24 17.4-9.24 0-14.6-4.78-17.32-10.55zm40.83-1.24 9.4-5.44c2.48 4.04 5.69 7.01 11.38 7.01 4.78 0 7.84-2.39 7.84-5.69 0-3.96-3.13-5.36-8.41-7.67l-2.89-1.24c-8.33-3.55-13.86-8-13.86-17.4 0-8.66 6.6-15.26 16.91-15.26 7.34 0 12.62 2.56 16.41 9.24l-8.99 5.77c-1.98-3.55-4.12-4.95-7.42-4.95-3.38 0-5.53 2.14-5.53 4.95 0 3.46 2.14 4.87 7.09 7.01l2.89 1.24c9.82 4.21 15.34 8.5 15.34 18.15 0 10.39-8.17 16.08-19.14 16.08-10.71 0-17.64-5.12-21.02-11.8zm0 0z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
    />
  </svg>
)

export default SvgComponent