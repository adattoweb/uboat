import { ComponentType, SVGProps } from "react"

export interface CardProps {
   title: string
   description: string
   Icon: ComponentType<SVGProps<SVGSVGElement>>
   href: string
   image: string
}
