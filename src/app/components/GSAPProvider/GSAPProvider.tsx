"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function GSAPProvider({ children }: React.PropsWithChildren) {
   useGSAP(() => {
      ScrollTrigger.batch(".fade-in", {
         once: true,
         start: "top 80%",
         onEnter: elements => {
            gsap.to(elements, {
               opacity: 1,
               y: 0,
               stagger: 0.3,
               duration: 1,
            })
         },
      })
   })
   return <>{children}</>
}
