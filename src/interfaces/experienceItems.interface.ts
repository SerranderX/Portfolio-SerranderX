import { SVGProps } from "react"

export interface ExperienceItems {
    name: string
    icon: (props: SVGProps<SVGSVGElement>) => Element
    src: string
}