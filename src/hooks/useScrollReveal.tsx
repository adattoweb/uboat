import { RefObject } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export class ScrollConfig {
   top: number
   bottom: number
   y: number
   withOffset: boolean

   constructor(top: number = 90, bottom: number = 5, y: number = 60, withOffset: boolean = false) {
      this.top = top
      this.bottom = bottom
      this.y = y
      this.withOffset = withOffset
   }
}

export function useScrollReveal(container: RefObject<HTMLElement | null>, selector: string, config: ScrollConfig) {
   useGSAP(
      () => {
         const isMobile = window.innerWidth < 768
         gsap.utils.toArray<HTMLElement>(selector).forEach((card, index) => {
            const offset = isMobile ? 0 : index * 5
            const top = config.withOffset ? config.top - offset : config.top
            const tl = gsap.timeline({
               scrollTrigger: {
                  trigger: card,
                  start: `top ${top}%`,
                  end: `bottom ${config.bottom}%`,
                  scrub: 0.6,
               },
            })

            tl.fromTo(
               card,
               {
                  opacity: 0,
                  y: config.y,
               },
               {
                  opacity: 1,
                  y: 0,
                  ease: "power1.out",
                  duration: 0.35,
               },
            )

            tl.to(card, {
               opacity: 1,
               y: 0,
               ease: "none",
               duration: 0.3,
            })

            tl.to(card, {
               opacity: 0,
               y: -config.y / 2,
               ease: "power1.out",
               duration: 0.35,
            })
         })
      },
      {
         scope: container,
      },
   )
}
