import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <title>{"file_type_angular"}</title>
    <path
      style={{
        fill: "#dd0031",
      }}
      d="M16 2 2.966 6.648l1.988 17.234L16 30l11.046-6.118 1.988-17.234L16 2z"
    />
    <path
      style={{
        fill: "#c3002f",
      }}
      d="M16 2v3.108-.014V30l11.046-6.118 1.988-17.234L16 2z"
    />
    <path
      d="m16 5.094-8.148 18.27h3.038l1.638-4.088h6.916l1.638 4.088h3.038L16 5.094Zm2.38 11.662h-4.76L16 11.03Z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)

export default SvgComponent