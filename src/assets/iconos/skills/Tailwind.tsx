import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 73.29"
    {...props}
  >
    <title>{"tailwind-css"}</title>
    <path
      d="M61.44 0Q36.87 0 30.72 24.43q9.22-12.21 21.5-9.16c4.68 1.16 8 4.53 11.72 8.26 6 6.08 13 13.11 28.22 13.11q24.57 0 30.72-24.43-9.21 12.22-21.5 9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64 7 76.67 0 61.44 0ZM30.72 36.64Q6.15 36.64 0 61.07q9.23-12.21 21.5-9.16c4.68 1.16 8 4.53 11.72 8.27 6 6.07 13 13.11 28.22 13.11q24.57 0 30.72-24.43-9.21 12.21-21.5 9.14c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"
      style={{
        fill: "#06b6d4",
        fillRule: "evenodd",
      }}
    />
  </svg>
)

export default SvgComponent
