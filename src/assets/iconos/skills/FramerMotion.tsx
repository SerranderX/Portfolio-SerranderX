import  React, { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    filter="invert(32%) sepia(80%) saturate(1273%) hue-rotate(268deg) brightness(101%) contrast(83%)"
    {...props}
  >
    <path d="M41.2 1.1c-12.1 2-25.1 10.5-32 20.9-22.3 33.3 1.4 77.6 41.3 77.3 36.6-.4 60-38.2 43.9-71.2C87.5 14.1 73.1 3.4 58 1c-7.4-1.1-9.4-1.1-16.8.1zM62 37.5l12-12v48.9l-6-5.9-6-5.9-6 5.9-6 5.9-6-5.9-6-5.9-6 5.9-6 5.9V25.5l12 12 12 12 12-12z" />
  </svg>
)

export default SvgComponent