import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <title>{"Artboard 12"}</title>
    <path
      d="M117.29 98.1 66.24 127v-22.51L98 87l19.29 11.1Zm3.5-3.16V34.55l-18.68 10.8v38.81l18.67 10.77ZM10.71 98.1l51 28.88v-22.49L29.94 87Zm-3.5-3.16V34.55l18.68 10.8v38.81Zm2.19-64.3L61.76 1v21.76L28.21 41.21l-.27.15Zm109.18 0L66.24 1v21.76L99.79 41.2l.27.15 18.54-10.71Z"
      style={{
        fill: "#8ed6fb",
      }}
    />
    <path
      d="M61.76 99.37 30.37 82.1V47.92L61.76 66Zm4.48 0 31.39-17.25v-34.2L66.24 66ZM32.5 44 64 26.66 95.5 44 64 62.16 32.5 44Z"
      style={{
        fill: "#1c78c0",
      }}
    />
  </svg>
)

export default SvgComponent
