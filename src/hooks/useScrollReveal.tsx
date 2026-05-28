import { RefObject } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

interface Config {
   top: string
   bottom: string
   y: number
}

type UseScrollRevealProps = {
   container: RefObject<HTMLElement | null>
   selector: string
   config?: Config
}

const defaultConfig: Config = {
   top: "90%",
   bottom: "5%",
   y: 60,
}

export function useScrollReveal({ container, selector, config = defaultConfig }: UseScrollRevealProps) {
   useGSAP(
      () => {
         gsap.utils.toArray<HTMLElement>(selector).forEach(card => {
            const tl = gsap.timeline({
               scrollTrigger: {
                  trigger: card,
                  start: `top ${config.top}`,
                  end: `bottom ${config.bottom}`,
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
               y: -config.y,
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
