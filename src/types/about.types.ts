import { ComponentType, SVGProps } from "react"

export interface IAboutCard {
   title: string
   description: string
   Icon: ComponentType<SVGProps<SVGSVGElement>>
   href: string
   image: string
}
