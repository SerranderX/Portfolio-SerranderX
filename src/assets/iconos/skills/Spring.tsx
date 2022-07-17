import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={240}
    height={240}
  >
    <path
      fill="#8bc34a"
      d="M43.982 23.635c.069-4.261-.891-9.328-2.891-15.273L39.523 3.7l-2.13 4.433a9.1 9.1 0 0 1-.38.698C33.514 5.827 28.974 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20c0-.123-.016-.242-.018-.365z"
    />
    <path
      fill="#fff"
      d="M39.385 32.558C36.262 36.86 30.734 37.091 25.531 37h-8.719c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145c-4.49-2.259-4.626-12.313 3.537-15.559 3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375 2.172 6.667 4.786 17.106.101 23.558zm-23.717 5.887c-.282.35-.713.555-1.163.555-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336.64.519.74 1.469.222 2.109z"
    />
  </svg>
)

export default SvgComponent
