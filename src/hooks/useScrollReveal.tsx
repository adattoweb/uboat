import { RefObject } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

type UseScrollRevealProps = {
   container: RefObject<HTMLElement | null>
   selector: string
}

export function useScrollReveal({ container, selector }: UseScrollRevealProps) {
   useGSAP(
      () => {
         gsap.utils.toArray<HTMLElement>(selector).forEach(card => {
            const tl = gsap.timeline({
               scrollTrigger: {
                  trigger: card,
                  start: "top 90%",
                  end: "bottom 5%",
                  scrub: 0.6,
               },
            })

            tl.fromTo(
               card,
               {
                  opacity: 0,
                  y: 60,
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
               y: -60,
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
