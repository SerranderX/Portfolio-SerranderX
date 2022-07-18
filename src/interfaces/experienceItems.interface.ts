import { SVGProps } from "react"

export interface ExperienceItems {
    name: string
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    url: string
}