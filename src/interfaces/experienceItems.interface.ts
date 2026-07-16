import React, { SVGProps } from "react"

export interface ExperienceItems {
    name: string
    icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element
    url: string
}