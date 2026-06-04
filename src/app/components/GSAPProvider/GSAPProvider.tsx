"use client"

import gsap from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)

export function GSAPProvider({ children }: React.PropsWithChildren) {
   return <>{children}</>
}
